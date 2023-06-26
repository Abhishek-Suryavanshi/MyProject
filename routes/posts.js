const path = require('path');
const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts');

router.get('/addpost', postController.getAddPost);
router.post('/addpost', postController.postAddPost);

router.get('/', postController.getPost);

router.delete('/deletepost')

module.exports = router;