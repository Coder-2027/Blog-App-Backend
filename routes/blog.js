const express = require('express');
const router = express.Router();

const { createComment } = require('../controllers/createComment');
const { likePage, unlikePage } = require('../controllers/LikeOrUnlike');
const { getPosts, createPost } = require('../controllers/createPost');

router.post('/createComment', createComment);
router.post('/likePage', likePage);
router.post('/unlikePage', unlikePage);
router.post('/createPost', createPost);
router.get('/getPosts', getPosts);

module.exports = router;