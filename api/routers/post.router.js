const express = require('express');
const verifyToken = require('../utils/verifyUser.js');
const { create, getposts, deletepost, updatepost } = require('../controllers/post.controller.js');

const router = express.Router();

router.get('/get_posts', getposts)
router.post('/create', verifyToken, create)
router.put('/updatepost/:postId/:userId', verifyToken, updatepost)
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost)

module.exports = router;
