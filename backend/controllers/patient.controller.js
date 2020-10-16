const { hospital } = require("../models");
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

    const admission_date = new Date();
    console.log(admission_date)
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
      admission_date
    };

    const patient = await Patient.create(PatientEntity);
    const hospitalItemUpdate = await Hospital.increment(
      { patient_count: 1 },
      { where: { id: hospital_id } }
    );
    res.status(200).json(patient);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Error creating the patient entry.",
    });
  }
};

const findAllByHospitalId = async (req, res) => {
  try {
    const { hospitalId } = req.params;
    var patientList = [];
    patientList = await Patient.findAll({
      where: {
        hospital_id: hospitalId,
      },
    });
    if (!patientList) throw new Error("No patient found");

    return res.status(200).send(patientList);
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

module.exports = { create, findAllByHospitalId, findByToday };
