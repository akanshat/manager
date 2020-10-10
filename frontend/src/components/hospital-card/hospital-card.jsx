import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Link className="link-to-hospital" to={`/hospital/${hospital.id}`}>
      <div className="hospital-card-container">
        {hospital.name}
        <div className="hospital-card-content">
          <span>Patients admitted today: {todayCount}</span>
          <span>Total Patient Count: {hospital.patient_count || 0}</span>
        </div>
      </div>
    </Link>
  );
};

export default HospitalCard;
