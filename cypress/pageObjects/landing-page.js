import { isVisible } from "../helper-functions/helper-functions";

const header = "#Landing_header";
const logo = "#Landing_logo";
const registrationButton = "#Landing_registration_button";
const loginButton = "#Landing_login_button";

function headerIsVisible() {
    isVisible(header);
}

function checkHeaderText() {
    cy.get(header).should('have.text', 'Welcome to QuizEngine');
}

function logoIsVisible() {
    isVisible(logo);
}

function registrationButtonIsVisible() {
    isVisible(registrationButton);
}

function checkRegistrationButtonText() {
 cy.get(registrationButton).should('have.text', 'Register');
}

function loginButtonIsVisible() {
    isVisible(loginButton);
}

function checkLoginButtonText() {
 cy.get(loginButton).should('have.text', 'Login');
}

module.exports = {
    headerIsVisible,
    checkHeaderText,
    logoIsVisible,
    registrationButtonIsVisible,
    checkRegistrationButtonText,
    loginButtonIsVisible,
    checkLoginButtonText
}; 