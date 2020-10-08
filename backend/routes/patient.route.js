var router = require("express").Router();
const patient = require("../controllers/patient.controller");

router.get("/", patient.findAll);
router.post("/", patient.create);
router.get("/today/:hospitalId", patient.findByToday);

module.exports = router;
