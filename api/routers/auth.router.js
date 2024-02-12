const router = require("express").Router();
const { sayHello, signup, signin, google } = require("../controllers/auth.controller.js");

router.route("/signup")
  .get(sayHello)
  .post(signup)

router.route("/signin")
  .post(signin)

router.route("/google")
  .post(google)

module.exports = router;
