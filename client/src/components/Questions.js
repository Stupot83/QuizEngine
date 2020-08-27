import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "./Modal";
import Button from "@material-ui/core/Button";
import "../sass/QuizList.scss";

class Questions extends Component {
    state = {
        modal: false
    };

    toggleModal = e => {
        this.setState({ modal: !this.state.modal });
    };

    render() {
        const { quizzes } = this.props.quizzes;

        return (
            <div className="QuizList_container">
                <h1 className="QuizList_header">Questions</h1>
                <div className="Quizzes_container">
                    <div className="No_quizzes_container">
                        <h1 className="No_quizzes_header">Currently there are no questions!</h1>
                        {quizzes.length > 0 ? (
                            <p>Visit a quiz to create Questions</p>
                        ) : (
                            <Button variant="contained" color="primary" onClick={this.toggleModal}>
                                Create Quiz
                            </Button>
                        )}
                        <Modal onClose={this.toggleModal} modal={this.state.modal} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    quizzes: state.quizzes
});

export default connect(mapStateToProps, {})(Questions);
