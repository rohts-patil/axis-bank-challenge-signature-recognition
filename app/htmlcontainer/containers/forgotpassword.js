import React, { Component } from "react";
import axios from "axios";

export default class forgotPassword extends Component {
  forgotPassword(e) {
    const emailId = document.getElementById("emialId").value;
    if (emailId) {
      const params = {
        emailId: emailId
      };
      const newUrl = "/login";

      axios
        .post(newUrl, params)
        .then(response => self.success(response))
        .catch(response => self.failure(response));
    }
  }
  render() {
    return (
      <div className="app-container">
        <div className="header">
          <div className="imgcontainer">
            <a href="/login"><img src="axis-logo.png" /></a>
            <div className="netbanking-logo">| &nbsp; Signature Recognition System:</div>
          </div>
        </div>
        <div>
          <div>
            <div class="container">
              <ul className="list">
                <li>
                  <div className="login-label">
                    <label>Forgot password</label>
                  </div>
                </li>
                <li>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter Your EmailId"
                      name="emialId"
                      id="emialId"
                      required
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <button type="submit" onClick={e => this.forgotPassword(e)}>
                      Submit
                    </button>
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
