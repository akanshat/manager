import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import "./home.css";

import HomeImage from "../../assets/homebg.png";

const Home = () => {
  const { token } = useAuth();
  if (token) return <Redirect to="/dashboard" />;
  return (
    <>
      <div className="home-container">
        <div className="home-nav">
          <div className="home-nav-left">Belgaum Hospitals</div>
          <div className="home-nav-right">
            <Link to="/login">
              <button type="button" className="home-buttons">
                LOGIN
              </button>
            </Link>
            <Link to="/register">
              <button type="button" className="home-buttons">
                REGISTER
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="home-content">
            <div className="intro-content">
              <div className="intro">Digital Hospital Manager</div>
              <p className="intro-text">
                A generalised hospital management system for the town of
                Belgaum. To aid in the management COVID-19 patients, The Medical
                Association of Belgaum presents a common datacenter for all the
                hospitals in the town.
              </p>
            </div>
            <div className="intro-empty"></div>
          </div>
          <div className="home-image">
            <img className="home-img" alt="doc" src={HomeImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
