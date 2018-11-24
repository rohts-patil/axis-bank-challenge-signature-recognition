import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
        usernameError: "",
        passswordError: "",
        username: "",
        password: ""
    };
}

  signIn(e) {
    const username = document.getElementById("uname").value;
    const password = document.getElementById("password1").value;
    if (username && password) {
      this.setState({
        username: username,
        password: password
      });
      const params = {
        username: username,
        password: password
      };
      const newUrl = "http://localhost:8000/login2";
      const self = this;
      const header ={ headers: { "Access-Control-Allow-Origin": "*", } };

      axios
        .post(newUrl, params, header)
        .then(response => self.signInSuccess(response))
        .catch(response => self.signInFailure(response));
    }
  }
  signInSuccess() {
    this.props.history.push("uploadassets");
  }
  signInFailure() {
    //this.props.history.push("uploadassets");
    this.setState({
      usernameError: "User Name is not valid",
      passswordError: "Password incorrect"
    });
  }
  render() {
    const {usernameError, passswordError } = this.state;

    return (
      <div className="app-container">
        <div className="header">
          <div className="imgcontainer">
            <a href="/login"><img src="axis-logo.png" /></a>
            <div className="netbanking-logo">| &nbsp; Signature Recognition System</div>
          </div>
        </div>
        <div>
          <div>
            <div className="container">
              <ul>
                <li className="list-Info">
                  <div className="login-label">
                    <label>Log In</label>
                  </div>
                </li>
                <li>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Username"
                      name="uname"
                      id="uname"
                      required
                    />
                    {usernameError ? (
                      <div className="error">
                        <label>{usernameError}</label>
                      </div>
                    ) : null}
                  </div>
                </li>
                <li>
                  <div>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="psw"
                      id="password1"
                      required
                    />
                  </div>
                  {passswordError ? (
                    <div className="error">
                      <label>{passswordError}</label>
                    </div>
                  ) : null}
                </li>
                <li>
                  <div>
                    <button type="submit" onClick={e => this.signIn()}>
                      Login
                    </button>
                  </div>
                </li>
                <li>
                  <div className="options-container">
                    <span className="row-pswd">
                      <a href="signup">First Time User? Register</a>
                    </span>
                    <label className="spacing">|</label>
                    <span className="row-user">
                      <a href="forgotpassword">Forgot Password</a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
