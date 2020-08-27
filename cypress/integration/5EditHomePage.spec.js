import * as landingPage from "../pageObjects/landing-page";
import * as loginPage from "../pageObjects/login-page";
import * as homePage from "../pageObjects/home-page";

describe("When the Login form is filled in", () => {
    before(() => {
        cy.visit("/");
        landingPage.clickLoginButton();
    });

    it("then the email field should be populated correctly", () => {
        loginPage.fillEmailFieldEditRole();
    });

    it("then the password field should be populated correctly", () => {
        loginPage.fillPasswordFieldEditRole();
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

    it("then the header is visible", () => {
        homePage.quizHeaderIsVisible();
    });

    it("then the header text is displayed correctly", () => {
        homePage.checkQuizHeaderText();
    });

    it("then the create Quiz button is visible", () => {
        homePage.createQuizButtonIsVisible();
    });

    it("then the createStoryButton text is displayed correctly", () => {
        homePage.checkCreateQuizButtonText();
    });

    describe("When the user clicks the Create Quiz Button", () => {
        before(() => {
            homePage.clickCreateQuizButton();
        });

        it("then the url is correct", () => {
            homePage.checkHomeUrl();
        });

        it("then the quizTitleHeader is visible", () => {
            homePage.quizTitleHeaderIsVisible();
        });

        it("then the quizTitleHeader text is displayed correctly", () => {
            homePage.checkQuizTitleHeaderText();
        });

        it("then the quizCategoryHeader is visible", () => {
            homePage.quizCategoryHeaderIsVisible();
        });

        it("then the quizCategoryHeader text is displayed correctly", () => {
            homePage.checkQuizCategoryHeaderText();
        });

        it("then the quizTitleField is visible", () => {
            homePage.quizTitleFieldIsVisible();
        });

        it("then the quizTitleField text is displayed correctly", () => {
            homePage.checkQuizTitleFieldText();
        });

        it("then the quizCategoryField is visible", () => {
            homePage.quizCategoryFieldIsVisible();
        });

        it("then the quizCategoryField text is displayed correctly", () => {
            homePage.checkQuizCategoryFieldText();
        });

        describe("When the user fills in the Create Quiz Modal", () => {
            it("then the quiz title field is filled in correctly", () => {
                homePage.fillQuizTitleField();
            });

            it("then the quiz category field is filled in correctly", () => {
                homePage.fillQuizCategoryField();
            });
        });

        describe("When the user clicks to create the quiz", () => {
            before(() => {
                homePage.clickModalCreateQuizButton();
            });

            it("then the url is correct", () => {
                homePage.checkHomeUrl();
            });

            it("then the quizTitle is visible", () => {
                homePage.quizTitleIsVisible();
            });

            it("then the quizTitle text is displayed correctly", () => {
                homePage.checkQuizTitleText();
            });

            it("then the quizCategory is visible", () => {
                homePage.quizCategoryIsVisible();
            });

            it("the quizCategory text is displayed correctly", () => {
                homePage.checkQuizTitleText();
            });

            it("then the editQuizButton is visible", () => {
                homePage.editQuizButtonIsVisible();
            });

            it("the editQuizButton text is displayed correctly", () => {
                homePage.checkEditQuizButtonText();
            });

            it("then the viewQuizButton is visible", () => {
                homePage.viewQuizButtonIsVisible();
            });

            it("the viewQuizButton text is displayed correctly", () => {
                homePage.checkViewQuizButtonText();
            });
        });
    });

    describe("When the user clicks to edit the quiz", () => {
        before(() => {
            homePage.clickEditQuizButton();
        });

        it("then the url is correct", () => {
            homePage.checkHomeUrl();
        });

        describe("When the user changes the quiz title and category", () => {
            before(() => {
                homePage.changeQuizTitle();
                homePage.changeQuizCategory();
            });

            it("then the user clicks the update quiz button", () => {
                homePage.clickModalUpdateQuizButton();
            });

            describe("When the user checks the changes are visible", () => {
                before(() => {
                    cy.visit("/");
                    landingPage.clickLoginButton();
                });

                it("then the email field should be populated correctly", () => {
                    loginPage.fillEmailFieldEditRole();
                });

                it("then the password field should be populated correctly", () => {
                    loginPage.fillPasswordFieldEditRole();
                });

                it("then the form is submitted, and the user is redirected to the home page", () => {
                    loginPage.submitLoginForm();
                });

                it("the quizTitle text is displayed correctly", () => {
                    homePage.checkQuizTitleChangedText();
                });

                it("the quizCategory text is displayed correctly", () => {
                    homePage.checkQuizCategoryChangedText();
                });
            });
        });
    });

    describe("When the user clicks to delete a quiz", () => {
        before(() => {
            homePage.clickEditQuizButton();
        });

        it("then the url is correct", () => {
            homePage.checkHomeUrl();
        });

        it("then the user clicks the delete quiz button", () => {
            homePage.clickModalDeleteQuizButton();
        });

        it("then the no quizzes logo is displayed", () => {
            homePage.checkNoQuizzesLogoIsVisible();
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
