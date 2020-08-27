import { isVisible, click } from "../helper-functions/helper-functions";

const createQuestionButton = "#createQuestionButton";
const quizTitleHeader = "#quizTitleHeader";
const quizTitle = "#quizTitle";
const quizCategoryHeader = "#quizCategoryHeader";
const quizCategory = "#quizCategory";
const goBackButton = "#goBackButton";
const questionsHeader = "#questionsHeader";
const createQuestionHeader = "#createQuestionHeader";
const questionTitleHeader = "#questionTitleHeader";
const questionTitle = "#questionTitle";
const addAnswerButton = "#addAnswerButton";
const answerHeader = "#answerHeader";
const removeButton = "#removeButton";
const correctAnswerHeader = "#correctAnswerHeader";
const correctAnswer = "#correctAnswer";
const createQuestionModalButton = "#createQuestionModalButton";
const newQuestionTitleHeader = "#newQuestionTitleHeader";
const newQuestionTitle = "#newQuestionTitle";
const editQuestionButton = "#editQuestionButton";
const answerOptionsHeader = "#answerOptionsHeader";
const newCorrectAnswerHeader = "#newCorrectAnswerHeader";
const newCorrectAnswer = "#newCorrectAnswer";

function checkViewUrl() {
    cy.url().should("contain", "http://localhost:3000/quizzes");
}

function clickCreateQuestionButton() {
    click(createQuestionButton);
}

function quizTitleHeaderIsVisible() {
    isVisible(quizTitleHeader);
}

function checkQuizTitleHeaderText() {
    cy.get(quizTitleHeader).should("have.text", "Title: ");
}

function quizTitleIsVisible() {
    isVisible(quizTitle);
}

function checkQuizTitleText() {
    cy.get(quizTitle).should("have.text", "Equations");
}

function quizCategoryHeaderIsVisible() {
    isVisible(quizCategoryHeader);
}

function checkQuizCategoryHeaderText() {
    cy.get(quizCategoryHeader).should("have.text", "Category: ");
}

function quizCategoryIsVisible() {
    isVisible(quizCategory);
}

function checkQuizCategoryText() {
    cy.get(quizCategory).should("have.text", "Maths");
}

function goBackButtonIsVisible() {
    isVisible(goBackButton);
}

function checkGoBackButtonText() {
    cy.get(goBackButton).should("have.text", "Go Back");
}

function createQuestionButtonIsVisible() {
    isVisible(createQuestionButton);
}

function checkCreateQuestionButtonText() {
    cy.get(createQuestionButton).should("have.text", "Create Question");
}

function questionsHeaderIsVisible() {
    isVisible(questionsHeader);
}

function checkQuestionsHeaderText() {
    cy.get(questionsHeader).should("have.text", "Questions");
}

function createQuestionHeaderIsVisible() {
    isVisible(createQuestionHeader);
}

function checkCreateQuestionHeaderText() {
    cy.get(createQuestionHeader).should("have.text", "Create Question");
}

function questionTitleHeaderIsVisible() {
    isVisible(questionTitleHeader);
}

function checkQuestionTitleHeaderText() {
    cy.get(questionTitleHeader).should("have.text", "Question Title");
}

function questionTitleInputIsVisible() {
    isVisible(questionTitle);
}

function checkQuestionTitleInputText() {
    cy.get(questionTitle).should("have.text", "");
}

function addAnswerButtonIsVisible() {
    isVisible(addAnswerButton);
}

function checkAddAnswerButtonText() {
    cy.get(addAnswerButton).should("have.text", "Add Answer");
}

function answerHeaderIsVisible() {
    isVisible(answerHeader);
}

function checkAnswerHeaderText() {
    cy.get(answerHeader).should("have.text", "Answer");
}

function answerInputIsVisible() {
    isVisible(".Modal_form_answers_input");
}

function checkAnswerInputText() {
    cy.get(".Modal_form_answers_input").should("have.text", "");
}

function removeButtonIsVisible() {
    isVisible(removeButton);
}

function checkRemoveButtonText() {
    cy.get(removeButton).should("have.text", "Remove");
}

function correctAnswerHeaderIsVisible() {
    isVisible(correctAnswerHeader);
}

function checkCorrectAnswerHeaderText() {
    cy.get(correctAnswerHeader).should("have.text", "Correct Answer");
}

function checkCorrectAnswerInputIsVisible() {
    isVisible(correctAnswer);
}

function checkCorrectAnswerInputText() {
    cy.get(correctAnswer).should("have.text", "");
}

function createQuestionModalButtonIsVisible() {
    cy.get(createQuestionModalButton).scrollIntoView();
    isVisible(createQuestionModalButton);
}

function checkCreateQuestionModalButtonText() {
    cy.get(createQuestionModalButton).should("have.text", "Create Question");
}

function clickCreateQuestionModalButton() {
    click(createQuestionModalButton);
}

function fillQuestionTitleField() {
    cy.get(questionTitle).type("What is the sum of 1 + 2?");
}

function fillQuestionAnswerFields() {
    cy.get(".Modal_form_answers_input").first().type("5");
    cy.get(".Modal_form_answers_input").eq(1).type("6");
    cy.get(".Modal_form_answers_input").eq(2).type("3");
    cy.get(".Modal_form_answers_input").eq(3).type("7");
}

function fillQuestionCorrectAnswerField() {
    cy.get(correctAnswer).type("3");
}

function addAnswerField() {
    click(addAnswerButton);
}

function newQuestionTitleHeaderIsVisible() {
    isVisible(newQuestionTitleHeader);
}

function checkNewQuestionTitleHeaderText() {
    cy.get(newQuestionTitleHeader).should("have.text", "Title:What is the sum of 1 + 2?");
}

function newQuestionTitleIsVisible() {
    isVisible(newQuestionTitle);
}

function checkNewQuestionTitleText() {
    cy.get(newQuestionTitle).should("have.text", "What is the sum of 1 + 2?");
}

function editQuestionButtonIsVisible() {
    isVisible(editQuestionButton);
}

function checkEditQuestionButtonText() {
    cy.get(editQuestionButton).should("have.text", "Edit Question");
}

function answerOptionsHeaderIsVisible() {
    isVisible(answerOptionsHeader);
}

function checkAnswerOptionsHeaderText() {
    cy.get(answerOptionsHeader).should("have.text", "Answer Options:A: 5B: 6C: 3D: 7");
}

function newCorrectAnswerHeaderIsVisible() {
    isVisible(newCorrectAnswerHeader);
}

function checkNewCorrectAnswerHeaderText() {
    cy.get(newCorrectAnswerHeader).should("have.text", "Correct Answer:3");
}

function newCorrectAnswerIsVisible() {
    isVisible(newCorrectAnswer);
}

function checkNewCorrectAnswerText() {
    cy.get(newCorrectAnswer).should("have.text", "3");
}

module.exports = {
    checkViewUrl,
    clickCreateQuestionButton,
    quizTitleHeaderIsVisible,
    checkQuizTitleHeaderText,
    quizTitleIsVisible,
    checkQuizTitleText,
    quizCategoryHeaderIsVisible,
    checkQuizCategoryHeaderText,
    quizCategoryIsVisible,
    checkQuizCategoryText,
    goBackButtonIsVisible,
    checkGoBackButtonText,
    createQuestionButtonIsVisible,
    checkCreateQuestionButtonText,
    questionsHeaderIsVisible,
    checkQuestionsHeaderText,
    createQuestionHeaderIsVisible,
    checkCreateQuestionHeaderText,
    questionTitleHeaderIsVisible,
    checkQuestionTitleHeaderText,
    questionTitleInputIsVisible,
    checkQuestionTitleInputText,
    addAnswerButtonIsVisible,
    checkAddAnswerButtonText,
    answerHeaderIsVisible,
    checkAnswerHeaderText,
    answerInputIsVisible,
    checkAnswerInputText,
    removeButtonIsVisible,
    checkRemoveButtonText,
    correctAnswerHeaderIsVisible,
    checkCorrectAnswerHeaderText,
    checkCorrectAnswerInputIsVisible,
    checkCorrectAnswerInputText,
    createQuestionModalButtonIsVisible,
    checkCreateQuestionModalButtonText,
    clickCreateQuestionModalButton,
    fillQuestionTitleField,
    fillQuestionAnswerFields,
    fillQuestionCorrectAnswerField,
    addAnswerField,
    newQuestionTitleHeaderIsVisible,
    checkNewQuestionTitleHeaderText,
    newQuestionTitleIsVisible,
    checkNewQuestionTitleText,
    editQuestionButtonIsVisible,
    checkEditQuestionButtonText,
    answerOptionsHeaderIsVisible,
    checkAnswerOptionsHeaderText,
    newCorrectAnswerHeaderIsVisible,
    checkNewCorrectAnswerHeaderText,
    newCorrectAnswerIsVisible,
    checkNewCorrectAnswerText
};
