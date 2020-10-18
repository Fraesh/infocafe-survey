import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Datenschutz } from "./views/Datenschutz";
import { Impressum } from "./views/Impressum";
import { Main } from "./views/Main";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/impressum">
          <Impressum />
        </Route>
        <Route exact path="/datenschutz">
          <Datenschutz />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
