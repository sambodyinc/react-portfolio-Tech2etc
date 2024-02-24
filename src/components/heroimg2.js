import "./heroimg2.css";

import React, { Component } from "react";

class Heroimg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="mask-img">
            <img className="into-img" src={this.props.bg-image} alt="Dynamic"/>
        </div>

        <div className="content">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Heroimg2;
