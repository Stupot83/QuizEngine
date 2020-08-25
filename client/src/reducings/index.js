import { combineReducers } from "redux";
import authReducer from "./authReducer";
import invalidEntriesReducer from "./invalidEntriesReducer";
import quizzesReducer from "./quizzesReducer";

export default combineReducers({
    auth: authReducer,
    invalidEntries: invalidEntriesReducer,
    quizzes: quizzesReducer
});
