const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validationForLogin(data) {
    let invalidEntries = {};

    // Change empty fields to empty string to use Validator
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // Check email validity
    if (Validator.isEmpty(data.email)) {
        invalidEntries.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        invalidEntries.email = "Email is invalid";
    }
    // Check password validity
    if (Validator.isEmpty(data.password)) {
        invalidEntries.password = "Password field is required";
    }

    return {
        invalidEntries,
        isValid: isEmpty(invalidEntries)
    };
};
