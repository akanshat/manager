import React, { useEffect, useState } from "react";
import config from "../../config";
import "./hospital-card.css";

const HospitalCard = ({ hospital }) => {
  const [todayCount, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const { backendUrl } = config;
      fetch(`${backendUrl}/patient/today/${hospital.id}`, {
        method: "get",
        headers: {},
      })
        .then((response) => response.json())
        .then((result) => setCount(result));
      console.log("for", hospital.id, " count  = ", todayCount);
    });
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hospital-card-container">
      {hospital.name}
      <div className="hospital-card-content">
        <span>Patients admitted today: {todayCount}</span>
        <span>Total Patient Count: {hospital.patient_count}</span>
      </div>
    </div>
  );
};

export default HospitalCard;
