import * as landingPage from "../pageObjects/landing-page";
import * as registrationPage from "../pageObjects/registration-page";

describe("When the Registration page is loaded", () => {
    before(() => {
        cy.visit("/");
        landingPage.clickRegistrationButton();
    });

    it("then the url is correct", () => {
        registrationPage.checkRegistrationUrl();
    });

    it("then the header is visible", () => {
        registrationPage.headerIsVisible();
    });

    it("then the header text is displayed correctly", () => {
        registrationPage.checkHeaderText();
    });

    it("then the name header is visible", () => {
        registrationPage.nameHeaderIsVisible();
    });

    it("then the name header text is displayed correctly", () => {
        registrationPage.checkNameHeaderText();
    });

    it("then the email header is visible", () => {
        registrationPage.emailHeaderIsVisible();
    });

    it("then the email header text is displayed correctly", () => {
        registrationPage.checkEmailHeaderText();
    });

    it("then the password header is visible", () => {
        registrationPage.passwordHeaderIsVisible();
    });

    it("then the password header text is displayed correctly", () => {
        registrationPage.checkPasswordHeaderText();
    });

    it("then the confirm password header is visible", () => {
        registrationPage.confirmPasswordHeaderIsVisible();
    });

    it("then the confirmPassword header text is displayed correctly", () => {
        registrationPage.checkConfirmPasswordHeaderText();
    });

    it("then the registration button is visible", () => {
        registrationPage.checkRegistrationButton();
    });

    it("then the registration button text is displayed correctly", () => {
        registrationPage.checkRegistrationButtonText();
    });

    it("then the redirect message is visible", () => {
        registrationPage.redirectMessageIsVisible();
    });

    it("then the redirect message text is displayed correctly", () => {
        registrationPage.checkRedirectMessageText();
    });

    it("then the login link should be visible", () => {
        registrationPage.loginLinkIsVisible();
    });

    it("then the login link text should be displayed correctly", () => {
        registrationPage.checkLoginLinkText();
    });

    describe("When the Registration form is filled in", () => {
        it("then the name field should be populated correctly", () => {
            registrationPage.fillNameField();
        });

        it("then the email field should be populated correctly", () => {
            registrationPage.fillEmailField();
        });

        it("then the password field should be populated correctly", () => {
            registrationPage.fillPasswordField();
        });

        it("then the confirmPassword field should be populated correctly", () => {
            registrationPage.fillConfirmPasswordField();
        });
    });
});
