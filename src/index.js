import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
// Dispatch actions to load initial state.

render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById("app")
);
