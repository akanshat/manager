const db = require("../models");
const Patient = db.patient;
const Hospital = db.hospital;
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
    };

    const patient = await Patient.create(PatientEntity);
    const hospitalItemUpdate = await Hospital.increment(
      { patient_count: 1 },
      { where: { id: hospital_id } }
    );
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

const findByToday = async (req, res) => {
  try {
    const { hospitalId } = req.params;
    const TODAY_START = new Date().setHours(0, 0, 0, 0);
    const NOW = new Date();

    const patientCountToday = await Patient.count({
      where: {
        hospital_id: hospitalId,
        admission_date: {
          [Op.gt]: TODAY_START,
          [Op.lt]: NOW,
        },
      },
    });
    res.status(200).json(patientCountToday);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Error fetching patient-count.",
    });
  }
};

module.exports = { create, findAll, findByToday };
