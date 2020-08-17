const express = require("express");
const bcrypt = require("bcryptjs");
const validationForRegistration = require("../form-validation/registration-validation");
const User = require("../models/user");

const router = express.Router();

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
            bcrypt.genSalt(10, salt => {
                bcrypt.hash(newUser.password, salt, (error, hash) => {
                    if (error) throw err;
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
