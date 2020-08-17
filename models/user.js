const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the User Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["Edit", "View", "Restricted"],
        default: ["Restricted"]
    },

    date_created: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
