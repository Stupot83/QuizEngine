import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createQuiz, updateQuiz, deleteQuiz } from "../actions/actionsForQuizzes";
import { createQuestion, updateQuestion, deleteQuestion } from "../actions/actionsForQuestions";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "../sass/Modal.scss";

class Modal extends Component {
  state = {
    quizTitle: "",
    quizCategory: "",
    questionTitle: "",
    potentialAnswers: [{ answer: "" }],
    correctAnswer: "",
    questionId: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit) {
      this.setState({
        quizTitle: nextProps.title,
        quizCategory: nextProps.category
      });
    } else if (nextProps.editQuestion) {
      this.setState({
        questionTitle: nextProps.questionTitle,
        potentialAnswers: nextProps.potentialAnswers,
        correctAnswer: nextProps.correctAnswer
      });
    }
  }

  onChange = e => {
    if (["answer"].includes(e.target.name)) {
      let potentialAnswers = [...this.state.potentialAnswers];
      potentialAnswers[e.target.dataset.id][e.target.name] = e.target.value;
      this.setState({ potentialAnswers });
    } else {
      this.setState({ [e.target.id]: e.target.value });
    }
  };

  addAnswer = e => {
    this.setState(prevState => ({
      potentialAnswers: [...prevState.potentialAnswers, { answer: "" }]
    }));
  };

  deleteAnswer = index => {
    let array = [...this.state.potentialAnswers];
    array.splice(index, 1);
    this.setState({ potentialAnswers: array });
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

  createQuestion = e => {
    e.preventDefault();

    const data = {
      quiz: this.props.quizzes.quiz._id,
      questionTitle: this.state.questionTitle,
      potentialAnswers: this.state.potentialAnswers,
      correctAnswer: this.state.correctAnswer
    };

    this.props.createQuestion(data);
    this.onClose();
  };

  updateQuestion = id => {
    let question = {
      id: id,
      questionTitle: this.state.questionTitle,
      potentialAnswers: this.state.potentialAnswers,
      correctAnswer: this.state.correctAnswer
    };

    this.props.updateQuestion(question);
    this.onClose();
  };

  deleteQuestion = id => {
    this.props.deleteQuestion(id);
    this.onClose();
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
    this.setState({
      quizTitle: "",
      quizCategory: "",
      questionTitle: "",
      potentialAnswers: [{ answer: "" }],
      correctAnswer: "",
    });
  };

  onSelectChange = e => {
    this.setState({ [e.target.id]: e.target.value });
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

    let { potentialAnswers } = this.state

    // Create Question Modal
    if (this.props.question) {
      return (
        <Grid container alignItems="center" justify="center" className="QuestionModal_container">
          <Grid item xs={12} className="QuestionModal_header_container">
            <CloseIcon className="QuestionModal_icon" fontSize="large" onClick={this.onClose}></CloseIcon>
            <Typography variant="h4" id="createQuestionHeader" className="QuestionModal_header_create">
              Create Question
                        </Typography>
          </Grid>
          <form className="Question_form_container" onSubmit={this.createQuestion}>
            <Grid item xs={12} className="QuestionModal_name_container">
              <label>
                <div id="questionTitleHeader" className="QuestionModal_form_label">Question Title</div>
                <input
                  onChange={this.onChange}
                  value={this.state.questionTitle}
                  id="questionTitle"
                  type="text"
                  placeholder="Question Title"
                  className="QuestionModal_form_input"
                />
              </label>
              {potentialAnswers.length < 5 && (
              <Grid item xs={12} className="QuestionModal_form_label">
                <Button
                  variant="outlined"
                  color="primary"
                  className="Modal_form_answers_button"
                  id="addAnswerButton"
                  onClick={this.addAnswer}
                >
                  Add Answer
            </Button>
              </Grid>
              )}
              <Grid item xs={12} className="Modal_form_answers_container">
                {potentialAnswers.map((val, id) => {
                  let potentialAnswerId = `potentialAnswer-${id}`;
                  
                  return (
                    <Grid
                      item
                      xs={12}
                      className="Modal_form_answers_details"
                      key={id}
                    >
                      <label
                        name="nameHeader"
                        className="Modal_form_answers_label"
                        id="answerHeader"
                        htmlFor={potentialAnswerId}
                      >
                        Answer
                    <input
                          type="text"
                          name="answer"
                          data-id={id}
                          id={potentialAnswerId}
                          value={potentialAnswers[id].answer}
                          className="Modal_form_answers_input"
                          onChange={this.onChange}
                        />
                      </label>
                      <Button
                        variant="outlined"
                        color="secondary"
                        className="Modal_form_answers_remove"
                        id="removeButton"
                        onClick={this.deleteAnswer.bind(this, id)}
                      >
                        Remove
                  </Button>
                    </Grid>
                  );
                })}
              </Grid>
              <label>
                <div id="correctAnswerHeader" className="QuestionModal_form_label">Correct Answer</div>
                <input
                  onChange={this.onChange}
                  value={this.state.correctAnswer}
                  id="correctAnswer"
                  type="text"
                  placeholder="Correct Answer"
                  className="QuestionModal_form_input"
                />
              </label>
            </Grid>
            <Grid item xs={12} className="QuestionModal_form_button_box">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                id="createQuestionModalButton"
                startIcon={<AddCircleOutlineIcon />}
                className="QuestionModal_form_create_button"
              >
                Create Question
                            </Button>
            </Grid>
          </form>
        </Grid>
      );
    }

    // Edit Question Modal
    else if (this.props.editQuestion) {
      const { questionId } = this.props;

      return (
        <Grid container alignItems="center" justify="center" className="QuestionModal_container">
          <Grid item xs={12} className="QuestionModal_header_container">
            <CloseIcon className="QuestionModal_icon" fontSize="large" onClick={this.onClose}></CloseIcon>
            <Typography variant="h4" className="QuestionModal_header_edit">
              Edit Question
                        </Typography>
          </Grid>
          <form className="Question_form_container">
            <Grid item xs={12} className="QuestionModal_name_container">
              <label>
                <div className="QuestionModal_form_label">Question Title</div>
                <input
                  onChange={this.onChange}
                  value={this.state.questionTitle}
                  id="questionTitle"
                  type="text"
                  placeholder="Question Title"
                  className="QuestionModal_form_input"
                />
              </label>
              {potentialAnswers.length < 5 && (
              <Grid item xs={12} className="QuestionModal_form_label">
                <Button
                  variant="outlined"
                  color="primary"
                  className="Modal_form_answers_button"
                  id="addAnswerButton"
                  onClick={this.addAnswer}
                >
                  Add Answer
            </Button>
              </Grid>
              )}
              <Grid item xs={12} className="Modal_form_answers_container">
                {potentialAnswers.map((val, id) => {
                  let potentialAnswerId = `potentialAnswer-${id}`;

                  return (
                    <Grid
                      item
                      xs={12}
                      className="Modal_form_answers_details"
                      key={id}
                    >
                      <label
                        name="nameHeader"
                        className="Modal_form_answers_label"
                        htmlFor={potentialAnswerId}
                      >
                        Answer
                    <input
                          type="text"
                          name="answer"
                          data-id={id}
                          id={potentialAnswerId}
                          value={potentialAnswers[id].answer}
                          className="Modal_form_answers_input"
                          onChange={this.onChange}
                        />
                      </label>
                      <Button
                        variant="outlined"
                        color="secondary"
                        className="Modal_form_answers_remove"
                        id="removeAnswerButton"
                        onClick={this.deleteAnswer.bind(this, id)}
                      >
                        Remove
                  </Button>
                    </Grid>
                  );
                })}
              </Grid>
              <label>
                <div className="QuestionModal_form_label">Correct Answer</div>
                <input
                  onChange={this.onChange}
                  value={this.state.correctAnswer}
                  id="correctAnswer"
                  type="text"
                  placeholder="Correct Answer"
                  className="QuestionModal_form_input"
                />
              </label>
            </Grid>
            <Grid item xs={12} className="QuestionModal_button_container">
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<EditIcon />}
                  className="QuestionModal_form_button_edit"
                  onClick={this.updateQuestion.bind(this, questionId)}
                >
                  Update Question
                                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<DeleteForeverIcon />}
                  className="QuestionModal_form_button_delete"
                  onClick={this.deleteQuestion.bind(this, questionId)}
                >
                  Delete Question
                                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      );
    }

    // Edit Quiz Modal
    else if (this.props.edit) {
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
              startIcon={<EditIcon />}
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
              startIcon={<DeleteForeverIcon />}
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
  quizzes: state.quizzes,
  questions: state.questions
});

export default connect(mapStateToProps, {
  createQuiz,
  updateQuiz,
  deleteQuiz,
  createQuestion,
  updateQuestion,
  deleteQuestion
})(withRouter(Modal));
