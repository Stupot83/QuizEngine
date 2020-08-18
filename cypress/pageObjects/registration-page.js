import { isVisible } from "../helper-functions/helper-functions";

const header = "#Registration_header";
const nameHeader = "#Name_field";
const emailHeader = "#Email_field";
const passwordHeader = "#Password_field";
const confirmPassWordHeader = "#Confirm_password_field";
const registrationButton = "#Registration_button";
const redirectMessage = "#Redirect_message";
const loginLink = "#Login_link";
const nameInput = "#name";
const emailInput = "#email";
const passwordInput = "#password";
const confirmPasswordInput = "#password2";

function headerIsVisible() {
    isVisible(header);
}

function checkHeaderText() {
    cy.get(header).should("have.text", "Register for QuizEngine");
}

function nameHeaderIsVisible() {
    isVisible(nameHeader);
}

function checkNameHeaderText() {
    cy.get(nameHeader).should("have.text", "Name");
}

function emailHeaderIsVisible() {
    isVisible(emailHeader);
}

function checkEmailHeaderText() {
    cy.get(emailHeader).should("have.text", "Email");
}

function passwordHeaderIsVisible() {
    isVisible(passwordHeader);
}

function checkPasswordHeaderText() {
    cy.get(passwordHeader).should("have.text", "Password");
}

function confirmPasswordHeaderIsVisible() {
    isVisible(confirmPassWordHeader);
}

function checkConfirmPasswordHeaderText() {
    cy.get(confirmPassWordHeader).should("have.text", "Confirm Password");
}

function checkRegistrationButton() {
    isVisible(registrationButton);
}

function checkRegistrationButtonText() {
    cy.get(registrationButton).should("have.text", "Register");
}

function redirectMessageIsVisible() {
    isVisible(redirectMessage);
}

function checkRedirectMessageText() {
    cy.get(redirectMessage).should("have.text", "Already registered for QuizEngine? Login");
}

function loginLinkIsVisible() {
    isVisible(loginLink);
}

function checkLoginLinkText() {
    cy.get(loginLink).should("have.text", "Login");
}

function fillNameField() {
    cy.get(nameInput).type("Edit");
}

function fillEmailField() {
    cy.get(emailInput).type("Edit@Edit.co.uk");
}

function fillPasswordField() {
    cy.get(passwordInput).type("editedit");
}

function fillConfirmPasswordField() {
    cy.get(confirmPasswordInput).type("editedit");
}

module.exports = {
    headerIsVisible,
    checkHeaderText,
    nameHeaderIsVisible,
    checkNameHeaderText,
    emailHeaderIsVisible,
    checkEmailHeaderText,
    passwordHeaderIsVisible,
    checkPasswordHeaderText,
    confirmPasswordHeaderIsVisible,
    checkConfirmPasswordHeaderText,
    checkRegistrationButton,
    checkRegistrationButtonText,
    redirectMessageIsVisible,
    checkRedirectMessageText,
    loginLinkIsVisible,
    checkLoginLinkText,
    fillNameField,
    fillEmailField,
    fillPasswordField,
    fillConfirmPasswordField
};
