var router = require("express").Router();
const user = require("../controllers/user.controller");

// router.get("/", (req, res) => {
//   console.log("get request");
// });

router.post("/register", user.register);
router.post("/login", user.login);

module.exports = router;
