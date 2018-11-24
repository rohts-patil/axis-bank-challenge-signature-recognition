import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      newpasswordError: "",
    };
}

  signUp(e) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const newpassword = document.getElementById("newpassword").value;
    const emailId = document.getElementById("emailId").value;

    if (username && password && newpassword && emailId) {
      if (password === newpassword) {
        const params = {
          username: username,
          password: password,
          password2: newpassword,
          email: emailId,
          submit: "Register"
        };
        const newUrl = "http://localhost:8000/register2";
        const header ={ headers: { "Access-Control-Allow-Origin": "*", } };
        const self = this;
  
        axios
          .post(newUrl, params, header)
          .then(response => self.signUpSuccess(response))
          .catch(response => self.signUpFailure(response));
      } else {
        this.setState({
          newpasswordError: "Password does not match"
        })
      }
    } else {
      this.setState({
        newpasswordError: "Please Fill all the required fields"
      })
    }
  }
  signUpSuccess() {
    this.props.history.push("login");
  }
  signUpFailure() {
    this.setState({
      newpasswordError: "Something Went Wrong"
    })
  }
  render() {
    const {
      newpasswordError
    } = this.state;
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
                    <label>Sign up</label>
                  </div>
                </li>
                <li>
                  <div>
                    <input
                      type="email"
                      placeholder="EmailId"
                      name="username"
                      id="emailId"
                      required
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <input
                      type="text"
                      placeholder="UserName"
                      name="uname"
                      id="username"
                      required
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      name="psw"
                      id="password"
                      required
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <input
                      type="password"
                      placeholder="Repeat Password"
                      name="psw"
                      id="newpassword"
                      required
                    />
                  </div>
                </li>
                {newpasswordError ? <label className="error">{newpasswordError}</label>: null}
                <li>
                  <div>
                    <button type="submit" onClick={e => this.signUp()}>
                      SignUp
                    </button>
                  </div>
                </li>
                <li>
                  <div className="options-container">
                      <span className="row-pswd">
                        <a href="login">Already a User? Log in</a>
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
