import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Topnav from "./components/navigation/Topnav";
import Landing from "./components/Landing";

function App() {
    return (
      <Router>
      <div className="App">
              <Topnav />
              <Route exact path="/" component={Landing} />
      </div>
  </Router>
    );
}

export default App;
