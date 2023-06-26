const path = require('path');
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');
const passport = require('passport');

router.get('/', loginController.getLogin);
// router.post('/', loginController.postLogin);
router.post('/',
    passport.authenticate('local', { failureRedirect: '/' }),
    function (req, res) {
        res.render('profile', {
            name: req.user.username
        });
    });

module.exports = router;