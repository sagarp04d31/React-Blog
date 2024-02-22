const express = require("express");
const router = express.Router();
const verifyUser = require("../utils/verifyUser.js");
const { sayHello, updateUser, deleteUser, signout, getUsers, getUser } = require("../controllers/user.controller.js");

router.get('/test', sayHello);
router.route("/update/:userId")
  .put(verifyUser, updateUser)
router.delete("/delete/:userId", verifyUser, deleteUser)
router.post('/signout', signout);
router.get('/getusers', verifyUser, getUsers);
router.get('/:userId', getUser);

module.exports = router;
