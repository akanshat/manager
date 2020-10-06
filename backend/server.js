const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

server.listen(4000, () => {
  console.log("server running at 4000");
});
