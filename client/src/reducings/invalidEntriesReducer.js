import { RETRIEVE_INVALID_ENTRIES } from "../actions/types";

const startingState = {};

export default function (state = startingState, action) {
    switch (action.type) {
        case RETRIEVE_INVALID_ENTRIES:
            return action.payload;
        default:
            return state;
    }
}
