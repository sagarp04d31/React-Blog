const express = require('express');
const verifyToken = require('../utils/verifyUser.js');
const createComment = require('../controllers/comment.controller.js');

const router = express.Router();

router.post('/create', verifyToken, createComment);

module.exports = router;
