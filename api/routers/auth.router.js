const router = require("express").Router();
const { sayHello, signup } = require("../controllers/user.controller.js");

router.route("/signup")
  .get(sayHello)
  .post(signup)

module.exports = router;
