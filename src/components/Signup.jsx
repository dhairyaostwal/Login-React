import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/signup" component={Signup} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

function Signup() {
  return (
    <div>
      <div className="loginText">Create An Account</div>
      <div className="inputBox">
        <p className="inputText">Email Address</p>
        {/* <label
          style={{
            color: "#FB74BB",
            fontSize: "0.9rem",
            marginTop: "rem"
          }}
        >
          harrypotter@hogwartz.org
        </label> */}
        <input className="input" type="text" />

        <p>Password</p>

        <input className="input" type="password" />
      </div>

      <button className="btn btn-primary">
        Take Me To The Realm of Learning
      </button>
      <p style={{ color: "#3e206d" }}>
        Already have an account?{" "}
        <span style={{ color: "#FB74BB" }}>
          <Link to="/login">Sign in.</Link>
        </span>
      </p>
    </div>
  );
}

export default Signup;
