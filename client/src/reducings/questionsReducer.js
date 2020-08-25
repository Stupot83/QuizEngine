import { CREATE_QUESTION, UPDATE_QUESTION, DELETE_QUESTION, GET_QUESTIONS, LOADING_QUESTIONS } from "../actions/types";

const initialState = {
    questions: [],
    questionsLoading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_QUESTION:
            return {
                ...state,
                questions: [action.payload, ...state.todos]
            };
        case GET_QUESTIONS:
            return {
                ...state,
                questions: action.payload,
                questionsLoading: false
            };
        case UPDATE_QUESTION:
            let index = state.questions.findIndex(question => question._id === action.payload._id);

            state.questions.splice(index, 1);

            return {
                ...state,
                questions: [action.payload, ...state.questions]
            };
        case DELETE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(question => question._id !== action.payload)
            };
        case LOADING_QUESTIONS:
            return {
                ...state,
                questionsLoading: true
            };
        default:
            return state;
    }
}
