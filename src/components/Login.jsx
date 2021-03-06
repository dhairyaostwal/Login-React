import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Signup from "./Signup";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/signup" component={Signup} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

function Login() {
  return (
    <div>
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
        <span style={{ color: "#FB74BB" }}>
          <Link to="/signup">Create an account.</Link>
        </span>
      </p>
    </div>
  );
}

export default Login;
