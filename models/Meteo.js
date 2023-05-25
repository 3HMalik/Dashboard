const mongoose = require('mongoose')

/** database schema for weather widget */
const MeteoSchema = new mongoose.Schema({
  link: String,
  city: String,
  temp: Number,
  humid: Number,
  desc: String
});

module.exports = mongoose.model('Meteo', MeteoSchema)