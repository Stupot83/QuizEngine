import * as landingPage from "../pageObjects/landing-page";
import * as loginPage from "../pageObjects/login-page";

describe('When the Login page is loaded', () => {

    before(() => {
        cy.visit("/");
        landingPage.clickLoginButton();
    });

    it("then the url is correct", () => {
        loginPage.checkLoginUrl();
    });

    it("then the header is visible", () => {
        loginPage.headerIsVisible();
    });

    it('then the header text is displayed correctly', () => {
        loginPage.checkHeaderText();
    });

    it("then the email header is visible", () => {
        loginPage.emailHeaderIsVisible();
    });

    it('then the email header text is displayed correctly', () => {
        loginPage.checkEmailHeaderText();
    });

    it('then the password header is visible', () => {
        loginPage.passwordHeaderIsVisible();
    });

    it('then the password header text is displayed correctly', () => {
        loginPage.checkPasswordHeaderText();
    });

    it("then the login button is visible", () => {
        loginPage.checkLoginButton();
    });

    it('then the login button text is displayed correctly', () => {
        loginPage.checkLoginButtonText();
    });

    it("then the redirect message is visible", () => {
        loginPage.redirectMessageIsVisible();
    });

    it('then the redirect message text is displayed correctly', () => {
        loginPage.checkRedirectMessageText();
    });

    it("then the registration link should be visible", () => {
        loginPage.registrationLinkIsVisible();
    });

    it('then the registration link text is displayed correctly', () => {
        loginPage.checkRegistrationLinkText();
    });

    describe('When the Login form is filled in', () => {

        it("then the email field should be populated correctly", () => {
            loginPage.fillEmailField();
        });

        it("then the password field should be populated correctly", () => {
            loginPage.fillPasswordField();
        });
    });

});