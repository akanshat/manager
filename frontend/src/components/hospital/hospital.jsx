import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./hospital.css";

const AddPatientForm = ({ hospitalId }) => {
  const [pdetails, setDetails] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    emergency_contact: "",
    age: "",
    gender: "",
    bloodtype: "",
    weight: "",
    height: "",
    details: "",
  });

  const handleInput = (event) => {
    setDetails({
      ...pdetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="input-form-container">
      <form className="input-field-container">
        <div className="name">
          <input
            className="input-field"
            type="text"
            name="firstname"
            value={pdetails.firstname}
            onChange={handleInput}
            placeholder="First Name"
          />
          <input
            className="input-field"
            type="text"
            name="lastname"
            value={pdetails.lastname}
            onChange={handleInput}
            placeholder="Last Name"
          />
        </div>
        <input
          className="input-field"
          type="text"
          name="phone"
          value={pdetails.phone}
          onChange={handleInput}
          placeholder="Phone Number"
        />
        <input
          className="input-field"
          type="text"
          name="emergencyContact"
          value={pdetails.emergency_contact}
          onChange={handleInput}
          placeholder="Emergency Contact"
        />
        <input
          className="input-field"
          type="number"
          name="age"
          value={pdetails.age}
          onChange={handleInput}
          placeholder="Age"
        />
        <select
          className="input-field select"
          id="gender"
          value={pdetails.gender}
          onChange={handleInput}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          className="input-field"
          type="text"
          name="bloodtype"
          value={pdetails.bloodtype}
          onChange={handleInput}
          placeholder="Blood Group"
        />

        <input
          className="input-field"
          type="number"
          step="0.01"
          name="weight"
          value={pdetails.weight}
          onChange={handleInput}
          placeholder="Weight"
        />
        <input
          className="input-field"
          type="number"
          step="0.01"
          name="height"
          value={pdetails.height}
          onChange={handleInput}
          placeholder="height"
        />
        <textarea
          name="details"
          className="input-field"
          value={pdetails.details}
          onChange={handleInput}
          placeholder="Symptoms/Medical Details"
        ></textarea>

        <button className="input-button">Add patient</button>
      </form>
    </div>
  );
};

const Hospital = () => {
  const { id } = useParams();

  return (
    <div className="hospital-page">
      <div>hospital id = {id}</div>
      <AddPatientForm />
      <div>patient list</div>
    </div>
  );
};

export default Hospital;
