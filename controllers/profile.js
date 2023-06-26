const Posts = require('../models/Posts');

module.exports.getProfile = async (req, res, next) => {
    // console.log("Here-2: ", req.user.username);
    if (req.user) {
        let data = await Posts.find({});
        res.render('profile', {
            data,
            name: req.user.username
        });
    }
    else {
        res.redirect('/');
    }
};