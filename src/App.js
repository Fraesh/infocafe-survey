import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Datenschutz } from "./views/Datenschutz";
import { Impressum } from "./views/Impressum";
import { Main } from "./views/Main";

const link = createHttpLink({
  uri: "https://infocafe.org/graphql",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
