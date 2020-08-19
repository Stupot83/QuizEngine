import { isVisible, click } from "../helper-functions/helper-functions";

const navTitle = "#Nav_title";
const profileIcon = "#Profile_icon";
const emailAddress = "#emailAddress";

function checkDisplayUrl() {
    cy.url().should("eq", "http://localhost:3000/home");
}

function navTitleIsVisible() {
    isVisible(navTitle);
}

function checkNavTitleText() {
    cy.get(navTitle).should("have.text", "QuizEngine");
}

function profileIconIsVisible() {
    isVisible(profileIcon);
}

function emailAddressIsVisible() {
    isVisible(emailAddress);
}

function checkEmailAddressText() {
    cy.get(emailAddress).should("have.text", "edit@edit.co.uk");
}

module.exports = {
    checkDisplayUrl,
    navTitleIsVisible,
    checkNavTitleText,
    profileIconIsVisible,
    emailAddressIsVisible,
    checkEmailAddressText
};
