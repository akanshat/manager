import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="form-wrapper">
          <h1>Login</h1>
          <input
            className="input-item"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="input-item"
            name="password"
            type="password"
            placeholder="Enter password"
          />
          <button className="input-button">LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
