import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Link, Route, Prompt } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Search from "./Search/Search";
const history = createBrowserHistory();


export default function App() {

  return (
  <Router history={history}>
      <Switch>
        <Route exact path="/" render={(routerProps) => <Search {...routerProps} />} />

       
      </Switch>
    </Router>
  );
}
