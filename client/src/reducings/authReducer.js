import { ESTABLISH_USER, LOADING_USER } from "../actions/types";

const isEmpty = require("is-empty");

const startingState = {
    passedAuthentication: false,
    user: {},
    loading: false,
};

export default function (state = startingState, action) {
    switch (action.type) {
        case ESTABLISH_USER:
            return {
                ...state,
                passedAuthentication: !isEmpty(action.payload),
                user: action.payload,
            };
        case LOADING_USER:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}