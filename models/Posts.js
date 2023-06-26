const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    description: String,
    imageUrl: String
});

module.exports = mongoose.model('posts', postSchema);