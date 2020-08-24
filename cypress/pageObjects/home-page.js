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
const header = "#header";
const createQuizButton = "#createQuizButton";
const quizTitleHeader = "#quizTitleHeader";
const quizCategoryHeader = "#quizCategoryHeader";
const quizTitle = "#quizTitle";
const quizCategory = "#quizCategory";
const modalCreateQuizButton = "#modalCreateQuizButton";
const actualQuizTitle = "#actualQuizTitle";
const actualQuizCategory = "#actualQuizCategory";
const editQuizButton = "#editQuizButton";
const viewQuizButton = "#viewQuizButton";
const modalUpdateQuizButton = "#modalUpdateQuizButton";
const modalDeleteQuizButton = "#modalDeleteQuizButton";
const noQuizzesLogo = "#noQuizzesLogo";

function checkHomeUrl() {
    cy.url().should("eq", "http://localhost:3000/display");
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

function clickSignOutIcon() {
    click(signOutIcon);
}

function clickCreateQuizButton() {
    click(createQuizButton);
}

function quizHeaderIsVisible() {
    isVisible(header);
}

function checkQuizHeaderText() {
    cy.get(header).should("have.text", "QuizList");
}

function createQuizButtonIsVisible() {
    isVisible(createQuizButton);
}

function checkCreateQuizButtonText() {
    cy.get(createQuizButton).should("have.text", "Create Quiz");
}

function quizTitleHeaderIsVisible() {
    isVisible(quizTitleHeader);
}

function checkQuizTitleHeaderText() {
    cy.get(quizTitleHeader).should("have.text", "Quiz Title");
}

function quizCategoryHeaderIsVisible() {
    isVisible(quizCategoryHeader);
}

function checkQuizCategoryHeaderText() {
    cy.get(quizCategoryHeader).should("have.text", "Quiz Category");
}

function quizTitleFieldIsVisible() {
    isVisible(quizTitle);
}

function checkQuizTitleFieldText() {
    cy.get(quizTitle).should("have.text", "");
}

function fillQuizTitleField() {
    cy.get(quizTitle).type("Equations");
}

function quizCategoryFieldIsVisible() {
    isVisible(quizCategory);
}

function checkQuizCategoryFieldText() {
    cy.get(quizCategory).should("have.text", "");
}

function fillQuizCategoryField() {
    cy.get(quizCategory).type("Maths");
}

function clickModalCreateQuizButton() {
    click(modalCreateQuizButton);
}

function quizTitleIsVisible() {
    isVisible(actualQuizTitle);
}

function checkQuizTitleText() {
    cy.get(actualQuizTitle).should("have.text", "Equations");
}

function quizCategoryIsVisible() {
    isVisible(actualQuizCategory);
}

function checkQuizCategoryText() {
    cy.get(actualQuizCategory).should("have.text", "Maths");
}

function editQuizButtonIsVisible() {
    isVisible(editQuizButton);
}

function checkEditQuizButtonText() {
    cy.get(editQuizButton).should("have.text", "Edit Quiz");
}

function viewQuizButtonIsVisible() {
    isVisible(viewQuizButton);
}

function checkViewQuizButtonText() {
    cy.get(viewQuizButton).should("have.text", "View Quiz");
}

function clickEditQuizButton() {
    click(editQuizButton);
}

function changeQuizTitle() {
    cy.get(quizTitle).clear();
    cy.get(quizTitle).type("Golfers");
}

function changeQuizCategory() {
    cy.get(quizCategory).clear();
    cy.get(quizCategory).type("Sports");
}

function clickModalUpdateQuizButton() {
    click(modalUpdateQuizButton);
}

function checkQuizTitleChangedText() {
    cy.get(actualQuizTitle).should("have.text", "Golfers");
}

function checkQuizCategoryChangedText() {
    cy.get(actualQuizCategory).should("have.text", "Sports");
}

function clickModalDeleteQuizButton() {
    click(modalDeleteQuizButton);
}

function checkNoQuizzesLogoIsVisible() {
    isVisible(noQuizzesLogo);
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
    clickProfileIcon,
    clickSignOutIcon,
    clickCreateQuizButton,
    quizHeaderIsVisible,
    checkQuizHeaderText,
    createQuizButtonIsVisible,
    checkCreateQuizButtonText,
    quizTitleHeaderIsVisible,
    checkQuizTitleHeaderText,
    quizCategoryHeaderIsVisible,
    checkQuizCategoryHeaderText,
    quizTitleFieldIsVisible,
    checkQuizTitleFieldText,
    fillQuizTitleField,
    quizCategoryFieldIsVisible,
    checkQuizCategoryFieldText,
    fillQuizCategoryField,
    clickModalCreateQuizButton,
    quizTitleIsVisible,
    checkQuizTitleText,
    quizCategoryIsVisible,
    checkQuizCategoryText,
    editQuizButtonIsVisible,
    checkEditQuizButtonText,
    viewQuizButtonIsVisible,
    checkViewQuizButtonText,
    clickEditQuizButton,
    changeQuizTitle,
    changeQuizCategory,
    clickModalUpdateQuizButton,
    checkQuizTitleChangedText,
    checkQuizCategoryChangedText,
    clickModalDeleteQuizButton,
    checkNoQuizzesLogoIsVisible
};
