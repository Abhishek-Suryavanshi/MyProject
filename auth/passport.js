const passport = require('passport');
const User = require('../models/Users');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const saltRounds = 10;

passport.use(new LocalStrategy(
    async function (username, password, done) {
        // console.log("Here: ", username);
        try {
            let user = await User.findOne({ username });
            if (!user) { return done(null, false); }
            bcrypt.compare(password, user.password).then(function (result) {
                // result == true
                if (result == false) { return done(null, false); }
                return done(null, user);
            });
        }
        catch (err) {
            if (err) { return done(err); }
        }
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id)
        .then((user) => {
            done(null, user);
        })
        .catch((err) => {
            done(null, false);
        })
});

module.exports = passport;