import React, { Component } from "react";
import axios from "axios";

export default class UploadAssets extends Component {
  uploadAssets(e) {
    if (e.target) {
      const params = {
      };
      const newUrl = "/upload";

      axios
        .post(newUrl, params)
        .then(response => self.Success(response))
        .catch(response => self.Failure(response));
    }
  }
  render() {
    console.log("upload");
    return (
      <div className="app-container upload">
        <div className="header">
          <div className="imgcontainer">
            <a href="/login"><img src="axis-logo.png" /></a>
            <div className="netbanking-logo">| &nbsp; Signature Recognition System</div>
          </div>
        </div>
        <div>
          <div className="container">
            <ul className="list">
              <li className="list-Info">
                <div className="login-label">
                  <label>Upload Files</label>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <label>Select File toUpload</label>
                  </div>
                  <input
                    type="file"
                    placeholder="Select File"
                    name="file"
                    id="file"
                    required
                  />
                </div>
              </li>
              <li>
                <div>
                  <button type="submit" onClick={e => this.uploadAssets(e)}>
                    Submit
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
