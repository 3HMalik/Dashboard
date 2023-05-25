const express = require('express')
const router = express.Router()
const request = require("request")
const { ensureAuth } = require('../middleware/auth')

const Story = require('../models/Story')
const Meteo = require('../models/Meteo')
const YT = require('../models/YT')
const SPOT = require('../models/SPOT')

/** Send all the widgets to the Front */
router.get('/services', ensureAuth, async (req, res) => {
    try {
      const stories = await Story.find({});
      const weather_list = await Meteo.find({});
      const youtube_list = await YT.find({});
      const spotify_list = await SPOT.find({});

      res.render('services', {
        List: stories,
        Weather: weather_list,
        yt: youtube_list,
        spotify: spotify_list
      })
    } catch (err) {
      console.error(err)
      console.log("There was a problem retrieving all datas from the database.");
    }
  

});


module.exports = router