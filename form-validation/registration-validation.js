const Validator = require("validator");
const isEmpty = require("is-empty");

const validationForRegistration = data => {
    let invalidEntries = {};

    // Change empty fields to empty string to use Validator
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // Check name for validity
    if (Validator.isEmpty(data.name)) {
        invalidEntries.name = "Name field is required";
    }

    // Check email for validity
    if (Validator.isEmpty(data.email)) {
        invalidEntries.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        invalidEntries.email = "Entry is not valid for an email";
    }

    // Check password for validity
    if (Validator.isEmpty(data.password)) {
        invalidEntries.password = "Password field is required";
    }

    if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
        invalidEntries.password = "Password must be minimum of 8 characters";
    }

    return {
        invalidEntries,
        isValid: isEmpty(invalidEntries)
    };
};

module.exports = validationForRegistration;
