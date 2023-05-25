const mongoose = require('mongoose')

/** database schema for spotify widget */
const SpotifySchema = new mongoose.Schema({
  img: String,  
  name: String,
  follow: String,
  genre: String,
  link: String
});

module.exports = mongoose.model('SPOT', SpotifySchema)