const router = require("express").Router();
const { sayHello, signup, signin } = require("../controllers/user.controller.js");

router.route("/signup")
  .get(sayHello)
  .post(signup)

router.route("/signin")
  .post(signin)

module.exports = router;
