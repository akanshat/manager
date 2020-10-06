import React, { useState } from "react";

import "./home.css";

import HomeImage from "../../assets/homebg.png";
import Login from "../login/login";
import Register from "../register/register";

const Home = () => {
  const [overlay, setOverlay] = useState(0);

  return (
    <>
      {overlay === 1 ? <Login /> : null}
      {overlay === 2 ? <Register /> : null}
      <div className="home-container" >
        <div className="home-nav">
          <div className="home-nav-left">Belgaum Hospitals</div>
          <div className="home-nav-right">
            <button
              type="button"
              className="home-buttons"
              onClick={() => setOverlay(1)}
            >
              LOGIN
            </button>
            <button
              type="button"
              className="home-buttons"
              onClick={() => setOverlay(2)}
            >
              REGISTER
            </button>
          </div>
        </div>
        <div >
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
