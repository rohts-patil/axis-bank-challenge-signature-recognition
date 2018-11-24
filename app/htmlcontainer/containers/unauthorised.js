import React, { Component } from "react";
import axios from "axios";

export default class UnAuthorised extends Component {

  render() {
    return (
      <div className="app-container upload">
        <div className="header">
          <div className="imgcontainer">
            <a href="/login"><img src="axis-logo.png" /></a>
            <div className="netbanking-logo">| &nbsp; Signature Recognition System</div>
          </div>
        </div>
        <form>
          <div className="container">
            <ul className="list">
              <li>
                <div className="login-label">
                  <label>You are not Authorised to do Anything!</label>
                </div>
              </li>
              <li>
                <div>
                  <button type="submit">
                    Login
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </div>
    );
  }
}
