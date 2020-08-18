import axios from "axios";

const establishAuthToken = token => {
    if (token) {
        // If User is logged in, apply authorization token to every request
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default establishAuthToken;
