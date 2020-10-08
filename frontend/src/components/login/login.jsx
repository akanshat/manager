import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import config from "../../config";
import Toast from "../../utils/toast";
import "./login.css";

const Login = () => {
  const backendUrl = config.backendUrl;
  const { token, setToken } = useAuth();
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const [message, setMessage] = useState();

  const handleSubmit = async () => {
    if (!inputs.email || !inputs.password) {
      Toast.fire({
        icon: "warning",
        title: "Warning: Empty Fields",
      });
    }

    const { token: fetchToken } = await fetch(`${backendUrl}/user/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    }).then((response) => response.json());

    if (!fetchToken) {
      Toast.fire({
        icon: "warning",
        title: "Incorrect email or password",
      });
    }
    localStorage.setItem("token", fetchToken);
    setToken(fetchToken);
  };

  const handleInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

   if (token) return <Redirect to="/dashboard" />;

  return (
    <div className="overlay">
      <div className="overlay-content">
        {message && <p>{message}</p>}
        <div className="form-wrapper">
          <h1>Login</h1>
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
              LOGIN
            </button>
            <Link to="/register">
              <button className="input-button-2">REGISTER</button>
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

export default Login;
