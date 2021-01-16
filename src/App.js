import React from "react";
import Login from "./components/Login";
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
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
