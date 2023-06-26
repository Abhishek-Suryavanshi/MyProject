const Posts = require('../models/Posts');

module.exports.getAddPost = (req, res, next) => {
    if (req.user) {
        res.render('addpost');
    }
    else {
        res.redirect('/');
    }
};

module.exports.postAddPost = async (req, res, next) => {
    const { title, description, imageUrl } = req.body;
    await Posts.create({ title, description, imageUrl });
    res.redirect('/profile');
};

// module.exports.getPost = async (req, res, next) => {
//     // console.log("Here-2: ", req.user.username);
//     let data = await Posts.find({});
//     res.render('profile', {
//         data,
//         name: req.user.username
//     });
// };

module.exports.getUpdatePost = async (req, res, next) => {
    let data = await Posts.find({});
    // console.log(data);
    res.render('updatepost', {
        data
    });
    // res.send("Haa chal gya");
};

module.exports.postUpdatePost = async (req, res, next) => {
    const { title, description, imageUrl, _id } = req.body;
    await Posts.updateOne({ _id }, {
        title: title,
        description: description,
        imageUrl: imageUrl,
    });
    res.redirect('/profile');
};

module.exports.getDeletePost = async (req, res, next) => {
    let data = await Posts.find({});
    res.render('deletepost', {
        data
    });
};