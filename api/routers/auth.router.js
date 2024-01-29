const router = require("express").Router();
const { sayHello, signup } = require("../controllers/user.controller.js");

router.route("/")
  .get(sayHello)
  .post(signup)

module.exports = router;
