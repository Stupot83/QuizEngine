import { combineReducers } from "redux";
import authReducer from "./authReducer";
import invalidEntriesReducer from "./invalidEntriesReducer";

export default combineReducers({
    auth: authReducer,
    invalidEntries: invalidEntriesReducer
});
