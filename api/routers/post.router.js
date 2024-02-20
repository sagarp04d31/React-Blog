const express = require('express');
const verifyToken = require('../utils/verifyUser.js');
const { create, getposts } = require('../controllers/post.controller.js');

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/get_posts', getposts)

module.exports = router;
