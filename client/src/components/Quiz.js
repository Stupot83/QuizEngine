import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuiz } from "../actions/actionsForQuizzes";
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
        creator: {}
    };

    toggleModal = e => {
        this.setState({
            modal: !this.state.modal,
            edit: false
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

    componentDidMount() {
        this.props.getQuiz(this.props.match.params.quiz);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.quiz !== prevProps.match.params.quiz) {
            this.props.getQuiz(this.props.match.params.quiz);
        }
    }

    render() {
        if (this.props.quiz && !this.props.quiz.quizLoading) {
            const { quiz } = this.props;

            return (
                <Card className="Quiz_content_container">
                    <h1 className="Quiz_content_header">{quiz.title}</h1>
                    <Grid item xs={12} className="Edit_quiz_button_container">
                        <Button
                            variant="contained"
                            color="secondary"
                            className="Edit_quiz_button"
                            onClick={this.toggleEditModal.bind(this, quiz.title, quiz.category, quiz._id, quiz.creator)}
                        >
                            Edit Quiz
                        </Button>
                    </Grid>

                    <div className="Modal_area">
                        <Modal
                            onClose={this.toggleModal}
                            modal={this.state.modal}
                            edit={this.state.edit}
                            title={this.state.title}
                            category={this.state.category}
                            id={this.state.id}
                            creator={this.state.creator}
                        />
                    </div>
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

const mapStateToProps = state => ({
    auth: state.auth,
    quiz: state.quizzes.quiz,
    quizzes: state.quizzes
});

export default connect(mapStateToProps, { getQuiz })(Quiz);
