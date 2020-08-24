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

describe("When the user is redirected to the Home page", () => {
    it("then the url is correct", () => {
        homePage.checkHomeUrl();
    });

    it("then the hamburger icon is visible", () => {
        homePage.hamburgerIsVisible();
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

    describe("When the user clicks the hamburger to open the sidenav", () => {
        before(() => {
            homePage.clickHamburgerIcon();
        });

        it("then the url is correct", () => {
            homePage.checkHomeUrl();
        });

        it("then the logo is visible", () => {
            homePage.logoIsVisible();
        });

        it("then the homeIcon is visible", () => {
            homePage.homeIconIsVisible();
        });

        it("the homeHeader text is displayed correctly", () => {
            homePage.checkHomeHeaderText();
        });

        it("then the signOutIcon is visible", () => {
            homePage.signOutIconIsVisible();
        });

        it("the signOutHeader text is displayed correctly", () => {
            homePage.checkSignOutHeaderText();
        });
    });

    describe("When the user closes the sidenav and opens the topnav menu", () => {
        before(() => {
            homePage.clickChevron();
            homePage.clickProfileIcon();
        });

        it("then the url is correct", () => {
            homePage.checkHomeUrl();
        });

        it("the homeHeader text is displayed correctly", () => {
            homePage.checkHomeHeaderText();
        });

        it("the signOutHeader text is displayed correctly", () => {
            homePage.checkSignOutHeaderText();
        });
    });

    describe("When the user clicks the sign-out option from the hamburger menu", () => {
        before(() => {
            cy.go("back");
            homePage.clickHamburgerIcon();
            homePage.clickSignOutIcon();
        });

        it("then the url is correct", () => {
            landingPage.checkLandingUrl();
        });
    });
});
