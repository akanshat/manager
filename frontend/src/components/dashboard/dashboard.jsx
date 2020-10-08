import React from "react";
import { useAuth } from "../../contexts/auth";
import { Link, Redirect } from "react-router-dom";

import dashbg from "../../assets/dashbg.png";
import power from "../../assets/power.png";
import "./dashboard.css";

const Dashboard = () => {
  const { token, logMeOut } = useAuth();
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div onClick={logMeOut}>
          <img className="logout-button" alt="power" src={power} />
        </div>
        <img className="dashbg" alt="bg" src={dashbg} />
        <div className="searchbar">
          <input
            type="text"
            className="searchbox"
            name="query"
            placeholder="Type to search hospitals..."
          />
        </div>
      </div>
      <div className="dashboard-divider"></div>
    </div>
  );
};

export default Dashboard;
