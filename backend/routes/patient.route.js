var router = require("express").Router();
const patient = require("../controllers/patient.controller");


router.post("/", patient.create);
router.get("/today/:hospitalId", patient.findByToday);
router.get("/:hospitalId", patient.findAllByHospitalId);
module.exports = router;
