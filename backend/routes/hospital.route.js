var router = require("express").Router();
const hospital = require("../controllers/hospital.controller");

router.get("/", (req, res) => {
  console.log("get request");
});

router.post("/", hospital.create);
router.get("/all", hospital.findAll);
router.get("/:id", hospital.findOne);

module.exports = router;
