import * as landingPage from "../pageObjects/landing-page";

describe("When the Landing page is loaded", () => {
    before(() => {
        cy.visit("/");
    });

    it("then the url is correct", () => {
        landingPage.checkLandingUrl();
    });

    it("then the header is visible", () => {
        landingPage.headerIsVisible();
    });

    it("then the header text is correctly displayed", () => {
        landingPage.checkHeaderText();
    });

    it("then the logo is visible", () => {
        landingPage.logoIsVisible();
    });

    it("then the registration button is visible", () => {
        landingPage.registrationButtonIsVisible();
    });

    it("then the registration button text is correctly displayed", () => {
        landingPage.checkRegistrationButtonText();
    });

    it("then the login button is visible", () => {
        landingPage.loginButtonIsVisible();
    });

    it("then the login button text is correctly displayed", () => {
        landingPage.checkLoginButtonText();
    });
});
