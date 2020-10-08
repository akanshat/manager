const db = require("../models");
const Patient = db.patient;
const Op = db.Sequelize.Op;

const create = async (req, res) => {
  try {
    if (!req.body) throw new Error("Invalid details!");
    const {
      hospital_id,
      firstname,
      lastname,
      phone,
      emergency_contact,
      age,
      gender,
      bloodtype,
      weight,
      height,
      details,
      admission_date,
    } = req.body;

    const PatientEntity = {
      hospital_id,
      firstname,
      lastname,
      phone,
      emergency_contact,
      age,
      gender,
      bloodtype,
      weight,
      height,
      details,
      admission_date,
    };

    const patient = await Patient.create(PatientEntity);
    res.json(patient);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Error creating the patient entry.",
    });
  }
};

const findAll = async (req, res) => {
  try {
    const patientList = await Patient.findAll();
    if (!patientList) throw new Error("No patient found");
    res.status(200).json({ patientList });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Error fetching patients.",
    });
  }
};

module.exports = { create, findAll };
