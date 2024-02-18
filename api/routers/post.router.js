const express = require('express');
const verifyToken = require('../utils/verifyUser.js');
const create = require('../controllers/post.controller.js');

const router = express.Router();

router.post('/create', verifyToken, create)

module.exports = router;
