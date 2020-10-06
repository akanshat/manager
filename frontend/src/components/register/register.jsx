import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="form-wrapper">
          <h1>Register</h1>
          <input
            className="input-item"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
          <input
            className="input-item"
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
          <input
            className="input-item"
            name="password"
            type="password"
            placeholder="Enter password"
            required
          />
          <button className="input-button">REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
