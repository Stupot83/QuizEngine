const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connect = require("../../config/connect");
const validationForLogin = require("../form-validation/login-validation");
const User = require("../models/user");

const router = express.Router();

// POST user/login - Login a User and return JWT
router.post("/login", (req, res) => {
    // Input from login form is validated
    const { invalidEntries, isValid } = validationForLogin(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(invalidEntries);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Check the Mongo Database in the Atlas Cluster for User details
    User.findOne({ email }).then(user => {
        // Check if User exists already in Mongo Database in Atlas Cluster
        if (!user) {
            return res.status(404).json({ emailnotfound: "User with this email does not exist!" });
        }
        // Check the password
        bcrypt.compare(password, user.password).then(matches => {
            if (matches) {
                // User details match those in Mongo Database in Atlas Cluster
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };
                // Sign the token
                jwt.sign(
                    payload,
                    connection.hiddenOrKey,
                    {
                        expiresIn: 10800 // 3 hours in seconds
                    },
                    token => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res.status(400).json({ passwordincorrect: "Password entered is incorrect!" });
            }
        });
    });
});

module.exports = router;
