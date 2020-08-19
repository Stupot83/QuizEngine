import axios from "axios";

import {
 GET_QUIZ,
 LOADING_QUIZ,
 GET_QUIZZES,
 LOADING_QUIZZES,
 CREATE_QUIZ,
 UPDATE_QUIZ,
 DELETE_QUIZ
} from "./types";

// Create a Quiz
export const createQuiz = quizData => dispatch => {
 axios
  .post("/api/quizzes/create", quizData)
  .then(res =>
   dispatch({
    type: CREATE_QUIZ,
    payload: res.data
   })
  )
  .catch(err => console.log(err));
};

// Update a quiz
export const updateQuiz = quizData => dispatch => {
 axios
  .patch("/api/quizzes/update", quizData)
  .then(res =>
   dispatch({
    type: UPDATE_QUIZ,
    payload: res.data
   })
  )
  .catch(err => console.log(err));
};

// Delete quiz
export const deleteQuiz = (id, history) => dispatch => {
 axios
  .delete(`/api/quizzes/delete/${id}`)
  .then(res =>
   dispatch({
    type: DELETE_QUIZ,
    payload: id
   })
  )
  .then(res => history.push("/home"))
  .catch(err => console.log(err));
};

// Get specific quiz by id
export const getQuiz = id => dispatch => {
 dispatch(loadingQuiz());
 axios
  .get(`/api/quizzes/${id}`)
  .then(res =>
   dispatch({
    type: GET_QUIZ,
    payload: res.data
   })
  )
  .catch(err =>
   dispatch({
    type: GET_QUIZ,
    payload: null
   })
  );
};

// Get all quizzes
export const getQuizzes = () => dispatch => {
 dispatch(loadingQuizzes());
 axios
  .get("/api/quizzes")
  .then(res =>
   dispatch({
    type: GET_QUIZZES,
    payload: res.data
   })
  )
  .catch(err =>
   dispatch({
    type: GET_QUIZZES,
    payload: null
   })
  );
};

// Loading a quiz
export const loadQuiz = () => {
 return {
  type: LOADING_QUIZ
 };
};

// Loading quizzes
export const loadingQuizzes = () => {
 return {
  type: LOADING_QUIZZES
 };
};