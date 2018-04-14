// This component handles the App template used on every page.
import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import CalculatorPage from "../containers/calculator.container";
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Route exact path="/" component={CalculatorPage} />
      </div>
    );
  }
}

export default App;