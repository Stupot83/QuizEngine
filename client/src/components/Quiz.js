import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getQuiz } from "../actions/actionsForQuizzes";
import { getQuestions, deleteQuestion } from "../actions/actionsForQuestions";
import Loading from "./Loading";
import Modal from "./Modal";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EditIcon from "@material-ui/icons/Edit";
import "../sass/QuizList.scss";
import "../sass/Quiz.scss";

class Quiz extends Component {
    state = {
        modal: false,
        edit: false,
        title: "",
        category: "",
        id: "",
        creator: {},
        editQuestion: false,
        question: false,
        questions: [],
        questionTitle: "",
        potentialAnswers: [],
        correctAnswer: "",
        questionId: ""
    };

    toggleModal = e => {
        this.setState({
            modal: !this.state.modal,
            edit: false,
            question: false,
            editQuestion: false
        });
    };

    toggleEditModal = (title, category, id, creator, e) => {
        this.setState({
            modal: !this.state.modal,
            edit: !this.state.edit,
            title: title,
            category: category,
            id: id,
            creator: creator
        });
    };

    toggleQuestionModal = e => {
        this.setState({
            modal: !this.state.modal,
            question: !this.state.question
        });
    };

    toggleEditQuestionModal = (questionTitle, potentialAnswers, correctAnswer, id, e) => {
        this.setState({
            modal: !this.state.modal,
            editQuestion: !this.state.editQuestion,
            questionTitle: questionTitle,
            potentialAnswers: potentialAnswers,
            correctAnswer: correctAnswer,
            questionId: id
        });
    };

    componentDidMount() {
        this.props.getQuiz(this.props.match.params.quiz);
        this.props.getQuestions(this.props.match.params.quiz);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.quiz !== prevProps.match.params.quiz) {
            this.props.getQuiz(this.props.match.params.quiz);
            this.props.getQuestions(this.props.match.params.quiz);
        }
    }

    onChange = async e => {
        await this.setState({ questions: this.props.questions.questions });

        let questions = await [...this.state.questions];

        questions[e.target.id].questionTitle = await e.target.value;

        await this.setState({ questions });
    };

    deleteQuestion = id => {
        this.props.deleteQuestion(id);
    };

    redirectToHome = e => {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/display");
            window.location.href = "/display";
        }
    };

    render() {
        const userRole = this.props.auth.user.role;
        const { questions } = this.props.questions;
        const answerLabels = ["A:", "B:", "C:", "D:", "E:"];

        let questionsList = questions.map((question, index) => (
            <Grid item xs={12} className="Question_details" key={question._id}>
                <Grid item xs={12} id="newQuestionTitleHeader" className="Question_header_box">
                    Title:
                    <Typography className="Question_title">
                        <li id="newQuestionTitle">{question.questionTitle}</li>
                    </Typography>
                </Grid>
                <Grid item xs={12} className="Question_answer_container">
                    <Grid item xs={8} id="answerOptionsHeader" className="Question_header_box">
                        Answer Options:
                        <Typography id="actualQuestionTitle" className="Question_answers">
                            {question.potentialAnswers.map((it, idx) => (
                                <li>
                                    {answerLabels[idx]} {it.answer}
                                </li>
                            ))}
                        </Typography>
                    </Grid>
                    {userRole === "Edit" && (
                        <Grid item xs={4} className="Question_header_box">
                            <Button
                                id="editQuestionButton"
                                variant="contained"
                                className="Question_button_edit"
                                size="large"
                                startIcon={<EditIcon />}
                                onClick={this.toggleEditQuestionModal.bind(
                                    this,
                                    question.questionTitle,
                                    question.potentialAnswers,
                                    question.correctAnswer,
                                    question._id
                                )}
                            >
                                Edit Question
                            </Button>
                        </Grid>
                    )}
                </Grid>
                {userRole === "Edit" && (
                    <Grid item xs={12} id="newCorrectAnswerHeader" className="Question_header_box">
                        Correct Answer:
                        <Typography id="newCorrectAnswer" className="Question_correct_answer">
                            <li>{question.correctAnswer}</li>
                        </Typography>
                    </Grid>
                )}
                {userRole === "View" && (
                    <Grid item xs={12} id="newCorrectAnswerHeader" className="Question_header_box">
                        Correct Answer:
                        <Typography id="newCorrectAnswer" className="Question_correct_answer">
                            <li>{question.correctAnswer}</li>
                        </Typography>
                    </Grid>
                )}
            </Grid>
        ));

        if (this.props.quiz && !this.props.quizzes.quizLoading && !this.props.questions.questionsLoading) {
            const { quiz } = this.props;

            return (
                <Card className="Quiz_background_container">
                    <Card className="Quiz_content_container">
                        <Grid item xs={12} className="Quiz_content_title_container">
                            <Grid item xs={8} className="Quiz_content_title_box">
                                <h1 id="quizTitleHeader" className="Quiz_content_title_header">
                                    Title:{" "}
                                </h1>
                                <h1 id="quizTitle" className="Quiz_content_title">
                                    {quiz.title}
                                </h1>
                            </Grid>
                            <Grid item xs={4} className="Quiz_content_button_container">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className="Go_back_button"
                                    id="goBackButton"
                                    size="large"
                                    startIcon={<ExitToAppIcon />}
                                    onClick={this.redirectToHome}
                                >
                                    Go Back
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className="Quiz_content_category_container">
                            <Grid item xs={12} className="Quiz_content_category_box">
                                <h1 id="quizCategoryHeader" className="Quiz_content_category_header">
                                    Category:{" "}
                                </h1>
                                <h1 id="quizCategory" className="Quiz_content_category">
                                    {quiz.category}
                                </h1>
                            </Grid>
                        </Grid>
                        <Grid container spacing={0} direction="column" alignItems="center" justify="center">
                            <Modal
                                onClose={this.toggleModal}
                                modal={this.state.modal}
                                edit={this.state.edit}
                                title={this.state.title}
                                category={this.state.category}
                                id={this.state.id}
                                creator={this.state.creator}
                                question={this.state.question}
                                editQuestion={this.state.editQuestion}
                                questionTitle={this.state.questionTitle}
                                potentialAnswers={this.state.potentialAnswers}
                                correctAnswer={this.state.correctAnswer}
                                questionId={this.state.questionId}
                            />
                        </Grid>
                        <Grid container className="Questions_container">
                            {userRole === "Edit" && (
                                <Grid item xs={12} className="Create_question_button_container">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className="Create_question_button"
                                        size="large"
                                        id="createQuestionButton"
                                        startIcon={<AddCircleOutlineIcon />}
                                        onClick={this.toggleQuestionModal}
                                    >
                                        Create Question
                                    </Button>
                                </Grid>
                            )}
                            <Grid item xs={12} id="questionsHeader" className="Questionslist_header">
                                Questions
                            </Grid>
                            <Grid item xs={12} className="Questionslist_container">
                                {questionsList}
                            </Grid>
                        </Grid>
                    </Card>
                </Card>
            );
        }

        return (
            <div className="Loading_container">
                <Loading />
            </div>
        );
    }
}

Quiz.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    quiz: state.quizzes.quiz,
    quizzes: state.quizzes,
    questions: state.questions
});

export default connect(mapStateToProps, { getQuiz, getQuestions, deleteQuestion })(Quiz);
