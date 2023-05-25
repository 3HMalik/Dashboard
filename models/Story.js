const mongoose = require('mongoose')

/** database schema for unsplash widget */
const StorySchema = new mongoose.Schema({
  link: String,
  name: String,
  likes: Number
});

module.exports = mongoose.model('Story', StorySchema)