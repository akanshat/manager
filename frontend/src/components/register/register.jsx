import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import config from "../../config";
import Toast from "../../utils/toast";
import "./register.css";

const Register = () => {
  const backendUrl = config.backendUrl;
  const { token } = useAuth();
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });

  const [message, setMessage] = useState();

  const handleInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!inputs.email || !inputs.password || !inputs.name) {
      Toast.fire({
        icon: "warning",
        title: "Warning: Empty Fields",
      });
    }

    const { message: msg } = await fetch(`${backendUrl}/user/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    }).then((response) => response.json());
    
    setMessage(msg);
  };

  if (token) return <Redirect to="/dashboard" />;

  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="form-wrapper">
          {message ? <h3>{message}</h3> : null}
          <h1>Register</h1>
          <input
            className="input-item"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={inputs.name}
            onChange={handleInput}
            required
          />
          <input
            className="input-item"
            name="email"
            type="email"
            placeholder="Enter email"
            value={inputs.email}
            onChange={handleInput}
            required
          />
          <input
            className="input-item"
            name="password"
            type="password"
            placeholder="Enter password"
            value={inputs.password}
            onChange={handleInput}
            required
          />
          <div className="buttons-div">
            <button onClick={handleSubmit} className="input-button">
              REGISTER
            </button>
            <Link to="/login">
              <button className="input-button-2">LOGIN</button>
            </Link>
          </div>
          <Link className="link-to-home-tag" to="/">
            <p className="link-to-home">Back Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
