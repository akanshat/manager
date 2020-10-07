import React from "react";

import dashbg from "../../assets/dashbg.png";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
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
    </div>
  );
};

export default Dashboard;
