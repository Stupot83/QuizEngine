import * as landingPage from "../pageObjects/landing-page";
import * as loginPage from "../pageObjects/login-page";
import * as homePage from "../pageObjects/home-page";

describe("When the Login form is filled in", () => {
    before(() => {
        cy.visit("/");
        landingPage.clickLoginButton();
    });

    it("then the email field should be populated correctly", () => {
        loginPage.fillEmailField();
    });

    it("then the password field should be populated correctly", () => {
        loginPage.fillPasswordField();
    });

    describe("When the form is submitted to login the user", () => {
        it("then the form is submitted, and the user is redirected to the home page", () => {
            loginPage.submitLoginForm();
        });
    });
});

describe("When the user is redirected to the Display page", () => {
    it("then the url is correct", () => {
        homePage.checkDisplayUrl();
    });

    it("then the navTitle is visible", () => {
        homePage.navTitleIsVisible();
    });

    it("then the navTitle text is displayed correctly", () => {
        homePage.checkNavTitleText();
    });

    it("then the profileIcon is visible", () => {
        homePage.profileIconIsVisible();
    });

    it("then the emailAddress is visible", () => {
        homePage.emailAddressIsVisible();
    });

    it("the emailAddress text is displayed correctly", () => {
        homePage.checkEmailAddressText();
    });
});
