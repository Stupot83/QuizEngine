import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import quizEngineStore from "./quizEngineStore";
import jwt_decode from "jwt-decode";
import Landing from "./components/Landing";
import Registration from "./components/entry/Registration";
import Login from "./components/entry/Login";
import Home from "./components/QuizInterface";
import { establishUser, logoutUser } from "./actions/actionsForAuthentication";
import establishAuthToken from "./config/establishAuthToken";
import AuthorizedRoute from "./components/authorizedRoutes/AuthorizedRoute";

// Check for token to keep the User logged in
if (localStorage.jwtToken) {
    // Set the auth token header auth
    const token = JSON.parse(localStorage.jwtToken);
    establishAuthToken(token);
    // Decode the token and get the User details
    const decoded = jwt_decode(token);
    // Set the User and isAuthenticated
    quizEngineStore.dispatch(establishUser(decoded));
    // Check for an expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout the User if token has expired
        quizEngineStore.dispatch(logoutUser());
        // Redirect the User to login form
        window.location.href = "./login";
    }
}

function App() {
    return (
        <Provider store={quizEngineStore}>
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/register" component={Registration} />
                        <Route exact path="/login" component={Login} />
                        <AuthorizedRoute exact path="/home" component={Home} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
