import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img
              className="img-fluid"
              src="https://i.ytimg.com/vi/ROnLTGbTQbQ/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="col-sm-6">
            <div className="brandText">
              All Notes <span>cross-Button</span>
            </div>
            <div className="loginText">Login</div>
            <div className="inputBox">
              <p className="inputText">Username</p>
              <input className="input" type="text" />
              <p>Password</p>
              <input className="input" type="password" />
            </div>
            <p
              style={{
                color: "#FB74BB",
                textAlign: "left",
                marginLeft: "5rem"
              }}
            >
              Forgot Password?
            </p>
            <button className="btn btn-primary">
              Take Me To The Realm of Learning
            </button>
            <p style={{ color: "#3e206d" }}>
              New here?{" "}
              <span style={{ color: "#FB74BB" }}>Create an account.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
