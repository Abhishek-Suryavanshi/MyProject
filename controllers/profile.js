module.exports.getProfile = (req, res, next) => {
    // console.log("Here-2: ", req.user.username);
    res.render('profile');
}