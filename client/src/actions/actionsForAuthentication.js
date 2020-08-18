import axios from "axios";
import establishAuthToken from "../config/establishAuthToken";
import jwt_decode from "jwt-decode";

import { RETRIEVE_INVALID_ENTRIES, ESTABLISH_USER, LOADING_USER } from "./types";

// Register a new User
export const registerNewUser = (userData, history) => dispatch => {
    axios
        .post("/api/users/register", userData)
        .then(res => history.push("/login")) // Redirect to login when registration is successful
        .catch(err =>
            dispatch({
                type: RETRIEVE_INVALID_ENTRIES,
                payload: err.response.data
            })
        );
};

// Login the User and assign the token
export const loginUser = userData => dispatch => {
    axios
        .post("/api/users/login", userData)
        .then(res => {
            // Save and set the token in localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", JSON.stringify(token));
            // Set the token to the Auth header
            establishAuthToken(token);
            // Decode the token to get the data for the User
            const decoded = jwt_decode(token);
            // Set the current User
            dispatch(establishUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: RETRIEVE_INVALID_ENTRIES,
                payload: err.response.data
            })
        );
};

// Establish the logged in User
export const establishUser = decoded => {
    return {
        type: ESTABLISH_USER,
        payload: decoded
    };
};

// Load User details
export const loadUser = () => {
    return {
        type: LOADING_USER
    };
};

// Log the User out
export const logoutUser = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem("jwtToken");
    // Remove the auth header for future requests
    establishAuthToken(false);
    // Set the current User to an empty object {} which sets isAuthenticated to false
    dispatch(establishUser({}));
};
