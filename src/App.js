import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Home from "./Home";
import "./css/style.css";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
      </>
    );
  }
}
export default App;
