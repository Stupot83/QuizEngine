import { isVisible } from "../helper-functions/helper-functions";

const header = "#Login_header";
const emailHeader = "#Email_header";
const passwordHeader = "#Password_header";
const loginButton = "#Login_button";
const redirectMessage = "#Redirect_message";
const registrationLink = "#Registration_link";
const emailInput = "#email";
const passwordInput = "#password";

function checkLoginUrl() {
    cy.url().should('eq', 'http://localhost:3000/login'); 
}

function headerIsVisible() {
    isVisible(header);
}

function checkHeaderText() {
    cy.get(header).should('have.text', 'Login to QuizEngine');
}

function emailHeaderIsVisible() {
    isVisible(emailHeader);
}

function checkEmailHeaderText() {
    cy.get(emailHeader).should('have.text', 'Email');
}

function passwordHeaderIsVisible() {
    isVisible(passwordHeader);
}

function checkPasswordHeaderText() {
    cy.get(passwordHeader).should('have.text', 'Password');
}

function checkLoginButton() {
    isVisible(loginButton);
}

function checkLoginButtonText() {
    cy.get(loginButton).should('have.text', 'Login');
}

function redirectMessageIsVisible() {
    isVisible(redirectMessage);
}

function checkRedirectMessageText() {
    cy.get(redirectMessage).should('have.text', `Not registered for QuizEngine? Register`);
}

function registrationLinkIsVisible() {
    isVisible(registrationLink);
}

function checkRegistrationLinkText() {
    cy.get(registrationLink).should('have.text', 'Register');
}

function fillEmailField() {
    cy.get(emailInput).type("dave@dave.com");
}

function fillPasswordField() {
    cy.get(passwordInput).type("davedavedavedave");
}

module.exports = {
    headerIsVisible,
    checkHeaderText,
    emailHeaderIsVisible,
    checkEmailHeaderText,
    passwordHeaderIsVisible,
    checkPasswordHeaderText,
    checkLoginButton,
    checkLoginButtonText,
    redirectMessageIsVisible,
    checkRedirectMessageText,
    registrationLinkIsVisible,
    checkRegistrationLinkText,
    fillEmailField,
    fillPasswordField,
    checkLoginUrl
}; 