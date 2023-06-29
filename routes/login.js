const path = require('path');
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');
const passport = require('passport');

router.get('/', loginController.getLogin);
// router.post('/', loginController.postLogin);
router.post('/',
    passport.authenticate('local', { failureRedirect: '/error' }),
    function (req, res) {
        res.redirect('/profile');
    });

module.exports = router;