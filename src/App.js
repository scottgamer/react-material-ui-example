import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./components/Layouts";
import Exercises from "./components/Exercises/Exercises";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
