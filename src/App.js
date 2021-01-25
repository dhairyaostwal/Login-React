import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Switch } from "react-router";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
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
            {/* <Login /> */}
            <main>
              <Switch>
                <Route path="/login" component={Login} exact />
                <Route path="/signup" component={Signup} />
                <Route component={Error} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
