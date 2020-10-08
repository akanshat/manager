import React from "react";
import "./hospital-card.css";

const HospitalCard = ({ hospital }) => {
  return (
    <div className="hospital-card-container">
      {hospital.name}
      <div className="hospital-card-content">
        <span>Patients admitted today</span>
        <span>Total Patient Count</span>
      </div>
    </div>
  );
};

export default HospitalCard;
