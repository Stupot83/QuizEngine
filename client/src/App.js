import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import quizEngineStore from "./quizEngineStore";
import Topnav from "./components/navigation/Topnav";
import Landing from "./components/Landing";
import Registration from "./components/entry/Registration";
import Login from "./components/entry/Login";
import Home from "./components/Home";

function App() {
    return (
        <Provider store={quizEngineStore}>
            <Router>
                <div className="App">
                    <Topnav />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/register" component={Registration} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/home" component={Home} />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
