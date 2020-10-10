const db = require("../models");
const Hospital = db.hospital;
const Patient = db.patient;
const Op = db.Sequelize.Op;

const create = async (req, res) => {
  try {
    if (!req.body.name) throw new Error("name is required!");

    const hospitalEntity = {
      name: req.body.name,
    };

    const hospital = await Hospital.create(hospitalEntity);
    res.json(hospital);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Error creating the hospital entry",
    });
  }
};

const findAll = async (req, res) => {
  try {
    const { query } = req.body;
    var hospitalList = await Hospital.findAll({
      where: {
        name: {
          [Op.substring]: query,
        },
      },
    });
    if (!hospitalList) throw new Error("No Hospitals found");
    res.status(200).json(hospitalList);
  } catch (error) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Error creating the hospital entry",
    });
  }
};

const findOne = async (req, res) => {
  try {
    const hospitalId = req.params.id;
    const hospitalItem = await Hospital.findOne({
      where: {
        id: hospitalId,
      },
    });

    if (!hospitalItem) throw new Error("Not Found");

    return res.status(200).send(hospitalItem);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Error finding the hospital",
    });
  }
};

const getAllDetailsById = async (req, res) => {
  try {
    const { hospitalId } = req.params;
    let HospitalDetailsEntity = {};
    const hospitalItem = await Hospital.findOne({
      where: {
        id: hospitalId,
      },
    });

    HospitalDetailsEntity.name = hospitalItem.name;
    HospitalDetailsEntity.patient_count = hospitalItem.patient_count;

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

    HospitalDetailsEntity.patientCountToday = patientCountToday;
    return res.status(200).json(HospitalDetailsEntity);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Error getting the hospital details",
    });
  }
};

module.exports = { create, findAll, findOne, getAllDetailsById };
