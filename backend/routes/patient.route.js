var router = require("express").Router();
const patient = require("../controllers/patient.controller");

router.get("/", (req, res) => {
  console.log("get request");
});

router.post("/", patient.create);

module.exports = router;
