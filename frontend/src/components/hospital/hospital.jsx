import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";

import config from "../../config";
import Toast from "../../utils/toast";
import "./hospital.css";

const AddPatientForm = ({ hospitalId }) => {
  const { backendUrl } = config;
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

  const handleSubmit = async () => {
    const { message: msg } = await fetch(`${backendUrl}/patient/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pdetails),
    }).then((response) => response.json());
  };

  return (
    <div className="input-form-container">
      <form className="input-field-container">
        <h2>ADD PATIENT</h2>
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

        <button type="submit" onClick={handleSubmit} className="input-button">
          Add patient
        </button>
      </form>
    </div>
  );
};

const Hospital = () => {
  const { backendUrl } = config;
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [classname, setClassname] = useState("add-patient-button");
  const [buttonText, setButtonText] = useState("Add Patient");
  const [hospDetails, setHospDetails] = useState({
    name: "",
    patient_count: 0,
    patientCountToday: 0,
  });
  const [pList, setpList] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/hospital/details/${id}`)
      .then((response) => response.json())
      .then((result) => setHospDetails(result));
  }, []);

  useEffect(() => {
    fetch(`${backendUrl}/patient/${id}`)
      .then((response) => response.json())
      .then((result) => setpList(result));
  }, []);

  const { name, patient_count, patientCountToday } = hospDetails;

  if (pList) {
    var patientItems = pList.map((patient) => {
      const dateItem = patient.admission_date.split("T")[0];
      return (
        <tr key={patient.id}>
          <td key={patient.firstname}>{patient.firstname}</td>
          <td key={patient.lastname}>{patient.lastname}</td>
          <td key={patient.phone}>{patient.phone}</td>
          <td key={patient.emergency_contact}>{patient.emergency_contact}</td>
          <td key={patient.age}>{patient.age}</td>
          <td key={patient.gender}>{patient.gender}</td>
          <td key={patient.bloodtype}>{patient.bloodtype}</td>
          <td key={patient.weight}>{patient.weight}</td>
          <td key={patient.height}>{patient.height}</td>
          <td key={patient.detials}>{patient.details}</td>
          <td key={patient.admission_date}>{dateItem}</td>
        </tr>
      );
    });
  }
  return (
    <div className="container-toggle">
      <div className="hospital-page">
        <div className="hospital-page-header">
          <div className="hospital-name">{name}</div>
          <div className="count">
            <span>Patients Admitted Today: {patientCountToday}</span>
            <span>Total Patients: {patient_count}</span>
          </div>
        </div>
        <button
          className={`input-button ${classname}`}
          onClick={() => {
            setOpen((o) => !o);
            open == false
              ? setButtonText("Cancel")
              : setButtonText("Add Patient");
            open == false
              ? setClassname("cancel-button")
              : setClassname("add-patient-button");
          }}
        >
          {buttonText}
        </button>

        {open ? <AddPatientForm /> : null}
        <div className="table-container">
          <h3>List of Patients</h3>
          <table>
            <thead>
              <tr>
                <th key="firstname">First Name</th>
                <th key="lastname">Last Name</th>
                <th key="phone">Phone Number</th>
                <th key="emergency">Emergency Contact Number</th>
                <th key="age">Age</th>
                <th key="gender">Gender</th>
                <th key="bloodtype">Blood Type</th>
                <th key="weight">Weight</th>
                <th key="height">Height</th>
                <th key="detials">Medical Details</th>
                <th key="date">Date of Admission</th>
              </tr>
              {patientItems}
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
