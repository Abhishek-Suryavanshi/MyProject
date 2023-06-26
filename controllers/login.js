const passport = require('passport');

module.exports.getLogin = (req, res, next) => {
    res.render('login');
};