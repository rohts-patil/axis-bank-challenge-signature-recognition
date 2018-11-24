import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../scss/app.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  componentDidMount() {
    this.props.history.push("/login");
  }
  render() {
    return (
      <div className="application-container">
         <div className="header">
          <div className="imgcontainer">
            <a href="/login"><img src="axis-logo.png" /></a>
            <div className="netbanking-logo">| &nbsp; Signature Recognition System:</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(App);
