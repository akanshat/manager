var router = require("express").Router();
const patient = require("../controllers/patient.controller");

router.get("/", patient.findAll);
router.post("/", patient.create);

module.exports = router;
