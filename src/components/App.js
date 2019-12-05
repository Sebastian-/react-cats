import React from "react";
import "./App.css";
import Home from "./Home";
import Cat from "./Cat";
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cats/:id" component={Cat} />
      </Router>
    </div>
  );
}

export default App;
