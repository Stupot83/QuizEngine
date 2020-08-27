import * as landingPage from "../pageObjects/landing-page";
import * as loginPage from "../pageObjects/login-page";
import * as homePage from "../pageObjects/home-page";
import * as viewPage from "../pageObjects/view-quiz-page";

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

 describe("When the user clicks the Create Quiz Button", () => {
  before(() => {
   homePage.clickCreateQuizButton();
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

 describe("When the user clicks to view the quiz", () => {
  before(() => {
   homePage.clickViewQuizButton();
  });

  it("then the url is correct", () => {
   viewPage.checkViewUrl();
  });

  it("then the title header is visible", () => {
   viewPage.quizTitleHeaderIsVisible();
  });

  it("then the title header text is displayed correctly", () => {
   viewPage.checkQuizTitleHeaderText();
  });

  it("then the title is visible", () => {
   viewPage.quizTitleIsVisible();
  });

  it("then the title text is displayed correctly", () => {
   viewPage.checkQuizTitleText();
  });

  it("then the category header is visible", () => {
   viewPage.quizCategoryHeaderIsVisible();
  });

  it("then the category header text is displayed correctly", () => {
   viewPage.checkQuizCategoryHeaderText();
  });

  it("then the category is visible", () => {
   viewPage.quizCategoryIsVisible();
  });

  it("then the category text is displayed correctly", () => {
   viewPage.checkQuizCategoryText();
  });

  it("then the go back buttton is visible", () => {
   viewPage.goBackButtonIsVisible();
  });

  it("then the go back button text is displayed correctly", () => {
   viewPage.checkGoBackButtonText();
  });

  it("then the create question button is visible", () => {
   viewPage.createQuestionButtonIsVisible();
  });

  it("then the create question button text is displayed correctly", () => {
   viewPage.checkCreateQuestionButtonText();
  });

  it("then the questions header is visible", () => {
   viewPage.questionsHeaderIsVisible();
  });

  it("then the questions header text is displayed correctly", () => {
   viewPage.checkQuestionsHeaderText();
  });

  describe("When the user clicks to create a question", () => {
   before(() => {
    viewPage.clickCreateQuestionButton();
   });

   it("then the url is correct", () => {
    viewPage.checkViewUrl();
   });

   it("then the create question header is visible", () => {
    viewPage.createQuestionHeaderIsVisible();
   });

   it("then the create question header text is correctly displayed", () => {
    viewPage.checkCreateQuestionHeaderText();
   });

   it("then the question title header is visible", () => {
    viewPage.questionTitleHeaderIsVisible();
   });

   it("then the question title header text is correctly displayed", () => {
    viewPage.checkQuestionTitleHeaderText();
   });

   it("then the question title input is visible", () => {
    viewPage.questionTitleInputIsVisible();
   });

   it("then the question title input text is displayed correctly", () => {
    viewPage.checkQuestionTitleInputText();
   });

   it("then the add answer button is visible", () => {
    viewPage.addAnswerButtonIsVisible();
   });

   it("then the add answer button text is displayed correctly", () => {
    viewPage.checkAddAnswerButtonText();
   });

   it("then the answer header is visible", () => {
    viewPage.answerHeaderIsVisible();
   });

   it("then the answer header text is correctly displayed", () => {
    viewPage.checkAnswerHeaderText();
   });

   it("then the answer input is visible", () => {
    viewPage.answerInputIsVisible();
   });

   it("then the answer input text is correctly displayed", () => {
    viewPage.checkAnswerInputText();
   });

   it("then the remove button is visible", () => {
    viewPage.removeButtonIsVisible();
   });

   it("then the remove button text is displayed correctly", () => {
    viewPage.checkRemoveButtonText();
   });

   it("then the correct answer header is visible", () => {
    viewPage.correctAnswerHeaderIsVisible();
   });

   it("then the correct answer header text is displayed correctly", () => {
    viewPage.checkCorrectAnswerHeaderText();
   });

   it("then the correct answer input is visible", () => {
    viewPage.checkCorrectAnswerInputIsVisible();
   });

   it("then the correct answer input text is displayed correctly", () => {
    viewPage.checkCorrectAnswerInputText();
   });

   it("then the create question modal button is visible", () => {
    viewPage.createQuestionModalButtonIsVisible();
   });

   it("then the create question modal button is correctly displayed", () => {
    viewPage.checkCreateQuestionModalButtonText();
   });

   it("then the user fills in the question title field", () => {
    viewPage.fillQuestionTitleField();
   });

   it("then the user adds three more answer options", () => {
    viewPage.addAnswerField();
    viewPage.addAnswerField();
    viewPage.addAnswerField();
   });

   it("then the user fills in the answer fields", () => {
    viewPage.fillQuestionAnswerFields();
   });

   it("then the user fills in the correct answer field", () => {
    viewPage.fillQuestionCorrectAnswerField();
   });

   describe("When the user clicks to create the question", () => {
    before(() => {
     viewPage.clickCreateQuestionModalButton();
    });

    it("then the url is correct", () => {
     viewPage.checkViewUrl();
    });

    it("then the new question title header is visible", () => {
     viewPage.newQuestionTitleHeaderIsVisible();
    });

    it("then the new question title header text is displayed correctly", () => {
     viewPage.checkNewQuestionTitleHeaderText();
    });

    it("then the new question title is visible", () => {
     viewPage.newQuestionTitleIsVisible();
    });

    it("then the new question title text is displayed correctly", () => {
     viewPage.checkNewQuestionTitleText();
    });

    it("then the edit question button is visible", () => {
     viewPage.editQuestionButtonIsVisible();
    });

    it("then the edit question button text is displayed correctly", () => {
     viewPage.checkEditQuestionButtonText();
    });

    it("then the answer options header is visible", () => {
     viewPage.answerOptionsHeaderIsVisible();
    });

    it("then the answer options header text is displayed correctly", () => {
     viewPage.checkAnswerOptionsHeaderText();
    });

    it("then the correct answer header is visible", () => {
     viewPage.newCorrectAnswerHeaderIsVisible();
    });

    it("then the correct answer header text is displayed correctly", () => {
     viewPage.checkNewCorrectAnswerHeaderText();
    });

    it("then the correct answer is visible", () => {
     viewPage.newCorrectAnswerIsVisible();
    });

    it("then the correct answer text is displayed correctly", () => {
     viewPage.checkNewCorrectAnswerText();
    });
   });
  });
 });
});