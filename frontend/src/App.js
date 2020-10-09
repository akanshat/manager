import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/auth";
import config from "./config";

import "./App.css";

import Home from "./components/home/home";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Hospital from "./components/hospital/hospital";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      fetch(`${config.backendUrl}/user`, {
        headers: {
          authorization: token,
        },
      });
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      const tk = localStorage.getItem("token");
      if (tk) setToken(tk);
    }
  }, [token]);

  const logMeOut = () => {
    localStorage.setItem("token", "");
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ token, setToken, logMeOut, user }}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/dashboard">
              {token ? <Dashboard /> : <Redirect to="/" />}
            </Route>
            <Route exact path={`/hospital/:id`}>
              {token ? <Hospital /> : <Redirect to="/" />}
            </Route>
            <Route path="*">
              <h1>404</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
