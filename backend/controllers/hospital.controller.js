const db = require("../models");
const Hospital = db.hospital;
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
    var hospitalList = await Hospital.findAll();
    if (!hospitalList) throw new Error("No Hospitals found");
    res.status(300).json(hospitalList);
  } catch (error) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Error creating the hospital entry",
    });
  }
};

// exports.findOne = (req, res) => {};

module.exports = { create, findAll };
