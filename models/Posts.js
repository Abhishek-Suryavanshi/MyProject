const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    description: String,
    imageUrl: String,
    comments: [String]
});

module.exports = mongoose.model('posts', postSchema);