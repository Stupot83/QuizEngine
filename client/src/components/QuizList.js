import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "./Modal";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Logo from "../Logo-no-quizzes.png";
import "../sass/QuizList.scss";

class QuizList extends Component {
    state = {
        modal: false,
        edit: false,
        title: "",
        category: "",
        id: "",
        creator: {}
    };

    toggleModal = e => {
        this.setState({ modal: !this.state.modal, edit: false });
    };

    toggleEditModal = (title, category, id, creator, e) => {
        e.stopPropagation();

        this.setState({
            modal: !this.state.modal,
            edit: !this.state.edit,
            title: title,
            category: category,
            id: id,
            creator: creator
        });
    };

    render() {
        const { quizzes } = this.props.quizzes;
        const userRole = this.props.auth.user.role;

        let content;

        let quizData = quizzes.sort().map(quiz => (
            <Card key={quiz._id} className="Quiz_card">
                <Grid item xs={12} className="Quiz_header_title">
                    Title:
                    <Typography id="actualQuizTitle" className="Quiz_title">
                        {quiz.title}
                    </Typography>
                </Grid>
                <Grid item xs={12} className="Quiz_header_category">
                    Category:
                    <Typography id="actualQuizCategory" className="Quiz_category">
                        {quiz.category}
                    </Typography>
                </Grid>
                {userRole === "Edit" && (
                    <Grid item xs={12}>
                        <Button
                            id="editQuizButton"
                            variant="contained"
                            className="Quiz_button_edit"
                            size="large"
                            startIcon={<EditIcon />}
                            onClick={this.toggleEditModal.bind(this, quiz.title, quiz.category, quiz._id, quiz.creator)}
                        >
                            Edit Quiz
                        </Button>
                    </Grid>
                )}
                <Grid item xs={12}>
                    <Button
                        id="viewQuizButton"
                        variant="contained"
                        className="Quiz_button_view"
                        startIcon={<VisibilityIcon />}
                        size="large"
                        onClick={() => this.props.history.push(`/quizzes/${quiz._id}`)}
                    >
                        View Quiz
                    </Button>
                </Grid>
            </Card>
        ));

        if (quizzes.length > 0) {
            // When there is one or more Quizzes
            content = (
                <>
                    {userRole === "Edit" && (
                        <Grid item xs={12} className="Create_quiz_button_container">
                            <Button
                                variant="contained"
                                size="large"
                                className="Create_quiz_button"
                                startIcon={<AddCircleOutlineIcon />}
                                onClick={this.toggleModal}
                                id="createQuizButton"
                            >
                                Create Quiz
                            </Button>
                        </Grid>
                    )}
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
                    <Grid container alignItems="center" justify="center" className="Quizzes_container">
                        {quizData}
                    </Grid>
                </>
            );
        } else {
            // No Quizzes
            content = (
                <>
                    {userRole === "Edit" && (
                        <Grid container alignItems="center" justify="center" className="No_quizzes_container">
                            <Grid item xs={12}>
                                <img id="noQuizzesLogo" className="Logo_no_quizzes" src={Logo} alt="Loading" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    className="Create_quiz_button"
                                    variant="contained"
                                    size="large"
                                    startIcon={<AddCircleOutlineIcon />}
                                    onClick={this.toggleModal}
                                    id="createQuizButton"
                                >
                                    Create Quiz
                                </Button>
                            </Grid>
                            <div className="Modal_area">
                                <Modal onClose={this.toggleModal} modal={this.state.modal} />
                            </div>
                        </Grid>
                    )}
                </>
            );
        }

        return (
            <Card className="QuizList_container">
                <h1 id="header" className="QuizList_header">
                    QuizList
                </h1>
                {content}
            </Card>
        );
    }
}

QuizList.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    quizzes: state.quizzes
});

export default connect(mapStateToProps, {})(QuizList);
