import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createQuiz, updateQuiz, deleteQuiz } from "../actions/actionsForQuizzes";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import "../sass/Modal.scss";

class Modal extends Component {
    state = {
        quizTitle: "",
        quizCategory: ""
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.edit) {
            this.setState({
                quizTitle: nextProps.title,
                quizCategory: nextProps.category
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    createQuiz = () => {
        let quiz = {
            quizTitle: this.state.quizTitle,
            quizCategory: this.state.quizCategory
        };

        this.props.createQuiz(quiz);
        this.onClose();
    };

    updateQuiz = async id => {
        let quiz = {
            id: this.props.id,
            quizTitle: this.state.quizTitle,
            quizCategory: this.state.quizCategory
        };

        await this.props.updateQuiz(quiz);

        this.onClose();
        window.location.reload();
    };

    deleteQuiz = id => {
        this.props.deleteQuiz(id, this.props.history);
        this.onClose();
    };

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
        this.setState({
            quizTitle: "",
            quizCategory: ""
        });
    };

    render() {
        if (!this.props.modal) {
            return null;
        }

        document.onkeyup = e => {
            if (e.keyCode === 27 && this.props.modal) {
                this.onClose();
            }
        };

        // Edit Quiz Modal
        if (this.props.edit) {
            return (
                <Grid container alignItems="center" justify="center" className="Modal_container">
                    <Grid item xs={12} className="Modal_header_container">
                        <CloseIcon className="Modal_icon" fontSize="large" onClick={this.onClose}></CloseIcon>
                        <Typography variant="h4" className="Modal_header_edit">
                            Edit Quiz
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="Modal_detail_container">
                        <label>
                            <div id="quizTitleHeader" className="Modal_form_label">
                                Quiz Title
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.state.quizTitle}
                                id="quizTitle"
                                type="text"
                                placeholder="Quiz Title"
                                className="Modal_form_input"
                            />
                        </label>
                    </Grid>
                    <Grid item xs={12} className="Modal_detail_container">
                        <label>
                            <div id="quizCategoryHeader" className="Modal_form_label">
                                Quiz Category
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.state.quizCategory}
                                id="quizCategory"
                                type="text"
                                placeholder="Quiz Category"
                                className="Modal_form_input"
                            />
                        </label>
                    </Grid>
                    <Grid item xs={6} className="Modal_form_button_box">
                        <Button
                            id="modalUpdateQuizButton"
                            variant="contained"
                            className="Modal_form_button_edit"
                            size="large"
                            startIcon={<AddCircleOutlineIcon />}
                            onClick={this.updateQuiz.bind(this, this.props.id)}
                        >
                            Update Quiz
                        </Button>
                    </Grid>
                    <Grid item xs={6} className="Modal_form_button_box">
                        <Button
                            id="modalDeleteQuizButton"
                            variant="contained"
                            className="Modal_form_button_delete"
                            size="large"
                            startIcon={<AddCircleOutlineIcon />}
                            onClick={this.deleteQuiz.bind(this, this.props.id)}
                        >
                            Delete Quiz
                        </Button>
                    </Grid>
                </Grid>
            );
        }

        // Create Quiz Modal
        else
            return (
                <Grid container alignItems="center" justify="center" className="Modal_container">
                    <Grid item xs={12} className="Modal_header_container">
                        <CloseIcon className="Modal_icon" fontSize="large" onClick={this.onClose}></CloseIcon>
                        <Typography variant="h4" className="Modal_header_create">
                            Create Quiz
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="Modal_detail_container">
                        <label>
                            <div id="quizTitleHeader" className="Modal_form_label">
                                Quiz Title
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.state.quizTitle}
                                id="quizTitle"
                                type="text"
                                placeholder="Quiz Title"
                                className="Modal_form_input"
                            />
                        </label>
                    </Grid>
                    <Grid item xs={12} className="Modal_detail_container">
                        <label>
                            <div id="quizCategoryHeader" className="Modal_form_label">
                                Quiz Category
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.state.quizCategory}
                                id="quizCategory"
                                type="text"
                                placeholder="Quiz Category"
                                className="Modal_form_input"
                            />
                        </label>
                    </Grid>
                    <Grid item xs={12} className="Modal_form_button_box">
                        <Button
                            id="modalCreateQuizButton"
                            variant="contained"
                            className="Modal_form_button_create"
                            size="large"
                            startIcon={<AddCircleOutlineIcon />}
                            onClick={this.createQuiz}
                        >
                            Create Quiz
                        </Button>
                    </Grid>
                </Grid>
            );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    quizzes: state.quizzes
});

export default connect(mapStateToProps, {
    createQuiz,
    updateQuiz,
    deleteQuiz
})(withRouter(Modal));
