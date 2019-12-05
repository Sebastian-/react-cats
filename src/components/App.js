import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
