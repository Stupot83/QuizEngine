import { combineReducers } from "redux";
import authReducer from "./authReducer";
import invalidEntriesReducer from "./invalidEntriesReducer";
import quizzesReducer from "./quizzesReducer";
import questionsReducer from "./questionsReducer";

export default combineReducers({
    auth: authReducer,
    invalidEntries: invalidEntriesReducer,
    quizzes: quizzesReducer,
    questions: questionsReducer
});
