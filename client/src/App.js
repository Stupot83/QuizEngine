import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Topnav from "./components/navigation/Topnav";
import Landing from "./components/Landing";
import Registration from "./components/entry/Registration";
import Login from "./components/entry/Login";

function App() {
    return (
        <Router>
            <div className="App">
                <Topnav />
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Registration} />
                <Route exact path="/login" component={Login} />
            </div>
        </Router>
    );
}

export default App;
