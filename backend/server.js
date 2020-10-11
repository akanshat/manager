const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()
var router = express.Router();

const hospitalRouter = require("./routes/hospital.route");
const patientRouter = require("./routes/patient.route");
const userRouter = require("./routes/user.route");

const server = express();

const PORT = process.env.PORT || 5000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

const db = require("./models");
db.sequelize.sync();

router.use("/user", userRouter);
router.use("/hospital", hospitalRouter);
router.use("/patient", patientRouter);

server.use("/", router);

server.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
