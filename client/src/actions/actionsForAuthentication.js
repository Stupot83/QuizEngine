import axios from "axios";
import authenticationToken from "../../../authentication/authenticationToken";
import jwt_decode from "jwt-decode";

import { RETRIEVE_INVALID_ENTRIES, ESTABLISH_USER, LOADING_USER } from "./types";

// Register a new User
export const registerNewUser = (userData, storage) => dispatch => {
    axios
        .post("/register", userData)
        .then(res => storage.push("/login")) // Redirect to login when registration is successful
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
        .post("/login", userData)
        .then(res => {
            // Save and set the token in localStorage
            const { jwt } = res.data;
            localStorage.setItem("jwtToken", jwt);
            // Set the token to the Auth header
            authenticationToken(jwt);
            // Decode the token to get the data for the Dev
            const decodedJwt = jwt_decode(jwt);
            // Set the current Dev
            dispatch(setCurrentDev(decodedJwt));
        })
        .catch(err =>
            dispatch({
                type: RETRIEVE_INVALID_ENTRIES,
                payload: err.response.data
            })
        );
};

// Establish the logged in User
export const establishUser = decodedJwt => {
    return {
        type: ESTABLISH_USER,
        payload: decodedJwt
    };
};

// Load User details
export const loadUser = () => {
    return {
        type: LOADING_USER
    };
};

// Log the Dev out
export const logoutUser = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem("jwtToken");
    // Remove the auth header for future requests
    authenticationToken(false);
    // Set the current User to an empty object {} which sets passedAuthentication to false
    dispatch(establishUser({}));
};
