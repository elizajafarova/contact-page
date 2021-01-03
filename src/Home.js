import React, { Component } from "react";
import Helper from "./Helper";
import web from "./images/ben-kolde-lqZPleZ4ERA-unsplash.jpg";

class Home extends Component {
  render() {
    return <Helper
       imgSrc={web}
       btname="Contact with Me"
     />;
  }
}
export default Home;
