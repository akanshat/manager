var router = require("express").Router();
const user = require("../controllers/user.controller");


router.post("/", user.register);
router.get("/", user.login);

module.exports = router;
