import { isVisible, click } from "../helper-functions/helper-functions";

const navTitle = "#Nav_title";
const profileIcon = "#Profile_icon";
const emailAddress = "#emailAddress";
const hamburger = "#hamburger";
const logo = "#logo";
const homeIcon = "#homeIcon";
const homeHeader = "#homeHeader";
const signOutIcon = "#signOutIcon";
const signOutHeader = "#signOutHeader";
const chevron = "#chevron";

function checkHomeUrl() {
    cy.url().should("eq", "http://localhost:3000/home");
}

function hamburgerIsVisible() {
    isVisible(hamburger);
}

function clickHamburgerIcon() {
    click(hamburger);
}

function logoIsVisible() {
    isVisible(logo);
}

function homeIconIsVisible() {
    isVisible(homeIcon);
}

function checkHomeHeaderText() {
    cy.get(homeHeader).should("have.text", "Home");
}

function signOutIconIsVisible() {
    isVisible(signOutIcon);
}

function checkSignOutHeaderText() {
    cy.get(signOutHeader).should("have.text", "Sign-out");
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

function clickChevron() {
    click(chevron);
}

function clickProfileIcon() {
    click(profileIcon);
}

module.exports = {
    checkHomeUrl,
    navTitleIsVisible,
    checkNavTitleText,
    profileIconIsVisible,
    emailAddressIsVisible,
    checkEmailAddressText,
    hamburgerIsVisible,
    clickHamburgerIcon,
    logoIsVisible,
    homeIconIsVisible,
    checkHomeHeaderText,
    signOutIconIsVisible,
    checkSignOutHeaderText,
    clickChevron,
    clickProfileIcon
};
