import axios from "axios";

import {
  CREATE_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  GET_QUESTIONS,
  LOADING_QUESTIONS
} from "./types";

// Create Question
export const createQuestion = questionData => dispatch => {
  axios
    .post("/api/questions/create", questionData)
    .then(res =>
      dispatch({
        type: CREATE_QUESTION,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Get Questions by Quiz id
export const getQuestions = id => dispatch => {
  dispatch(loadingQuestions());
  axios
    .get(`/api/questions/${id}`)
    .then(res =>
      dispatch({
        type: GET_QUESTIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_QUESTIONS,
        payload: null
      })
    );
};

// Delete Question
export const deleteQuestion = id => dispatch => {
  axios
    .delete(`/api/questions/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_QUESTION,
        payload: id
      })
    )
    .catch(err => console.log(err));
};

// Update Question
export const updateQuestion = questionData => dispatch => {
  axios
    .patch("/api/questions/update", questionData)
    .then(res =>
      dispatch({
        type: UPDATE_QUESTION,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Questions Loading
export const loadingQuestions = () => {
  return {
    type: LOADING_QUESTIONS
  };
}; 