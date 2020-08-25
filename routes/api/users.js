const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const validationForRegistration = require("../../form-validation/registration-validation");
const validationForLogin = require("../../form-validation/login-validation");
const jwt = require("jsonwebtoken");
const connection = require("../../database/connection");
const User = require("../../models/user");

// POST user/register - Register a new User
router.post("/register", (req, res) => {
    // Input from registration form is validated
    const { invalidEntries, isValid } = validationForRegistration(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(invalidEntries);
    }
    // Check if User exists already in Mongo Database in Atlas Cluster
    User.findOne({ email: req.body.email }).then(userExists => {
        if (userExists) {
            return res.status(400).json({ email: "User already exists with this email!" });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            // Hash the Password before saving to the Mongo Database in the Atlas Cluster
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

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
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User details match those in Mongo Database in Atlas Cluster
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                };
                // Sign the token
                jwt.sign(
                    payload,
                    connection.secretOrKey,
                    {
                        expiresIn: 10800 // 3 hours in seconds
                    },
                    (err, token) => {
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
