const express = require("express");
const router = express.Router();
const verifyUser = require("../utils/verifyUser.js");
const { sayHello, updateUser } = require("../controllers/user.controller.js");

router.get('/test', sayHello);

router.route("/update/:userId")
  .put(verifyUser, updateUser)

module.exports = router;
