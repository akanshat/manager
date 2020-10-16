import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/auth";

import dashbg from "../../assets/dashbg.png";
import power from "../../assets/power.png";
import config from "../../config";
import HospitalCard from "../hospital-card/hospital-card";

import "./dashboard.css";

const Dashboard = () => {
  const { logMeOut } = useAuth();
  const [query, setQuery] = useState("");
  const [hosList, setHosList] = useState([]);

  useEffect(() => {
    const { backendUrl } = config;
    fetch(`${backendUrl}/hospital/all`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((result) => setHosList(result));
  }, [query]);

  if (hosList.length > 0) {
    var hospitalCards = hosList.map((hospital) => (
      <HospitalCard hospital={hospital} key={hospital.id} />
    ));
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div onClick={logMeOut}>
          <img className="logout-button" alt="power" src={power} />
        </div>
        <img className="dashbg" alt="bg" src={dashbg} />
        <div className="search-header">
          <h1>Digital Hospital Manager</h1>
          <input
            type="text"
            className="searchbox"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search hospitals..."
          />
        </div>
      </div>
      {hospitalCards ? (
        <div className="hospital-cards-div">{hospitalCards}</div>
      ) : null}
    </div>
  );
};

export default Dashboard;
