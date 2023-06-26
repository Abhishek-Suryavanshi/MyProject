const Posts = require('../models/Posts');

module.exports.getAddPost = (req, res, next) => {
    res.render('addpost');
};

module.exports.postAddPost = async (req, res, next) => {
    const { title, description, imageUrl } = req.body;
    await Posts.create({ title, description, imageUrl });
    res.redirect('/posts');
};

module.exports.getPost = async (req, res, next) => {
    // console.log("Here-2: ", req.user.username);
    let data = await Posts.find({});
    res.render('profile', {
        data
    });
}