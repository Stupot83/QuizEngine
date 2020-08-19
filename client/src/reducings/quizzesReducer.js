import {
 GET_QUIZ,
 LOADING_QUIZ,
 GET_QUIZZES,
 LOADING_QUIZZES,
 CREATE_QUIZ,
 UPDATE_QUIZ,
 DELETE_QUIZ
} from "../actions/types";

const startingState = {
 quizzes: [],
 quiz: [],
 quizLoading: false,
 quizzesLoading: false
};

export default function(state = startingState, action) {
 switch (action.type) {
   case CREATE_QUIZ:
     return {
       ...state,
       quizzes: [action.payload, ...state.quizzes]
     };

   case UPDATE_QUIZ:
     let index = state.quizzes.findIndex(
       quiz => quiz._id === action.payload._id
     );

     state.quizzes.splice(index, 1);

     return {
       ...state,
       quizzes: [action.payload, ...state.quizzes]
     };

   case DELETE_QUIZ:
     return {
       ...state,
       quizzes: state.quizzes.filter(
         quiz => quiz._id !== action.payload
       )
     };

   case GET_QUIZ:
     return {
       ...state,
       quiz: action.payload,
       quizLoading: false
     };

   case GET_QUIZZES:
     return {
       ...state,
       quizzes: action.payload,
       quizzesLoading: false
     };

   case LOADING_QUIZ:
     return {
       ...state,
       quizLoading: true
     };

   case LOADING_QUIZZES:
     return {
       ...state,
       quizzesLoading: true
     };
   default:
     return state;
 }
}