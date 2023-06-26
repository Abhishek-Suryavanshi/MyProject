const User = require('../models/Users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.getSignup = (req, res, next) => {
    res.render('signup');
};

module.exports.postSignup = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) {
            res.render('login', {
                msg: "User Already Exists"
            });
        }
        else {
            bcrypt.genSalt(saltRounds, async function (err, salt) {
                bcrypt.hash(password, saltRounds, async function (err, hash) {
                    // Store hash in your password DB.
                    await User.create({
                        username,
                        password: hash
                    })
                    res.render('login', {
                        msg: "SignUp SuccessFull Now You Can Login"
                    });
                });
            });
        }
    }
    catch (err) {
        res.send(err);
    }
}