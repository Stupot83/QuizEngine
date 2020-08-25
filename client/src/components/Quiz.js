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

    toggleEditQuestionModal = (questionTitle, id, e) => {
        this.setState({
            modal: !this.state.modal,
            editQuestion: !this.state.editQuestion,
            questionTitle: questionTitle,
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

    onChange = async (e) => {
        await this.setState({ questions: this.props.questions.questions });

        let questions = await [...this.state.questions];

        questions[e.target.id].name = await e.target.value;

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
        // const userRole = this.props.auth.user.role
        const { questions } = this.props.questions;
        console.log({questions});

        let questionsList = questions.map((question, index) => (
            <Grid item xs={12} className="Quiz_details" key={question._id}>
                <Grid
                    item
                    xs={6}
                    onClick={this.toggleEditQuestionModal.bind(
                        this,
                        question.questionTitle,
                        question._id
                    )}
                    id={index}
                    name="question"
                    className="Quiz_description"
                >
                    {question.questionTitle}
                </Grid>
            </Grid>
        ));

        if (this.props.quiz &&
            !this.props.quizzes.quizLoading &&
            !this.props.questions.questionsLoading)
            {
            const { quiz } = this.props;

            return (
                <Card className="Quiz_content_container">
                    <Grid item xs={12} className="Quiz_content_header_container">
                        <Grid item xs={6}>
                            <h1 className="Quiz_content_header">{quiz.title}</h1>
                        </Grid>
                        <Grid item xs={6} className="Quiz_content_button_container">
                            <Button variant="contained"
                                color="secondary"
                                className="Go_back_button"
                                onClick={this.redirectToHome}
                            >
                                Go Back
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center">
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
                            questionId={this.state.questionId}
                        />
                    </Grid>
                    <Grid container className="Questions_container">
                        <Grid item xs={12} className="Create_question_button_container">
                            <Button
                                variant="contained"
                                color="primary"
                                className="Create_question_button"
                                onClick={this.toggleQuestionModal}
                            >
                                Create Question
                            </Button>
                        </Grid>
                        Why is this not fucking working
                        <Grid item xs={12} className="Questionslist_container">Questions should be here{questionsList}</Grid>
                    </Grid>
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
