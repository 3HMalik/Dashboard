const mongoose = require('mongoose')

/** database schema for youtube widget */
const YTSchema = new mongoose.Schema({
  img: String,  
  name: String,
  sub: String,
  desc: String,
  link: String
});

module.exports = mongoose.model('YT', YTSchema)