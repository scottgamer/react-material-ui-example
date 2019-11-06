import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./components/Layouts";
import Exercises from "./components/Exercises/Exercises";
import Panes from "./components/Panes/Panes";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Panes />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
