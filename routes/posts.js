const path = require('path');
const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts');

router.get('/addpost', postController.getAddPost);
router.post('/addpost', postController.postAddPost);

router.get('/updatepost',postController.getUpdatePost);
router.post('/updatepost',postController.postUpdatePost);

router.get('/deletepost',postController.getDeletePost);

// router.get('/', postController.getPost);

module.exports = router;