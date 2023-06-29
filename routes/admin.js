const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const adminController = require('../controllers/admin');

router.get('/', adminController.getAdmin);

router.post('/',
    passport.authenticate('local', { failureRedirect: '/' }),
    function (req, res) {
        res.redirect('/adminportal');
    });

module.exports = router;