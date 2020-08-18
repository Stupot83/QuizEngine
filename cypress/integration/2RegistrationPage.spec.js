import * as landingPage from "../pageObjects/landing-page";
import * as registrationPage from "../pageObjects/registration-page";

describe("When the Registration page is loaded", () => {
    before(() => {
        cy.visit("/");
        landingPage.clickRegistrationButton();
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

    it("the email header text is displayed correctly", () => {
        registrationPage.checkEmailHeaderText();
    });

    it("then the password header is visible", () => {
        registrationPage.passwordHeaderIsVisible();
    });

    it("the password header text is displayed correctly", () => {
        registrationPage.checkPasswordHeaderText();
    });

    it("then the confirm password header is visible", () => {
        registrationPage.confirmPasswordHeaderIsVisible();
    });

    it("the confirmPassword header text is displayed correctly", () => {
        registrationPage.checkConfirmPasswordHeaderText();
    });

    it("the registration button is visible", () => {
        registrationPage.checkRegistrationButton();
    });

    it("the registration button text is displayed correctly", () => {
        registrationPage.checkRegistrationButtonText();
    });

    it("the redirect message is visible", () => {
        registrationPage.redirectMessageIsVisible();
    });

    it("the redirect message text is displayed correctly", () => {
        registrationPage.checkRedirectMessageText();
    });

    it("the login link should be visible", () => {
        registrationPage.loginLinkIsVisible();
    });

    it("the login link text should be displayed correctly", () => {
        registrationPage.checkLoginLinkText();
    });

    describe("When the Registration form is filled in", () => {
        it("the name field should be populated correctly", () => {
            registrationPage.fillNameField();
        });

        it("the email field should be populated correctly", () => {
            registrationPage.fillEmailField();
        });

        it("the password field should be populated correctly", () => {
            registrationPage.fillPasswordField();
        });

        it("the confirmPassword field should be populated correctly", () => {
            registrationPage.fillConfirmPasswordField();
        });
    });
});
