const express = require('express')
const router = express.Router()
const request = require("request")
const { ensureAuth } = require('../middleware/auth')
const { Spotify } = require("spotify-info.js");

const infos = new Spotify({
clientID: "",
clientSecret: "",
});

const SPOT = require('../models/SPOT')

/** edit spotify widget */
router.get("/edit/:id", ensureAuth, (req, res) => {
    var id = req.params.id;

    SPOT.findByIdAndDelete(id, function(err){
        if (err) {
            console.log("Error Editing Spotify widget");
            console.log(err);
        } else {
            console.log("updating Spotify from MongoDb: " + id);
            res.redirect("/spotify/add")
        }
    });
});

/** delete spotify widget */
router.get("/delete/:id", ensureAuth, (req, res) => {
    var id = req.params.id;

    SPOT.findByIdAndDelete(id, function(err){
        if (err) {
            console.log("Error deleting Spotify widget");
            console.log(err);
        } else {
            console.log("Deleting Spotify widget from MongoDb: " + id);
            res.redirect("/display/services")
        }
    });
});

/** configure spotify widget */
router.get('/add', ensureAuth, (req, res) => {
    res.render('spotify_view/add')
})


/** add spotify widget */
router.get("/", ensureAuth, (req,res) => {
    var id = req.query.searchTerm

    const searchArtist = async (req, res) => {
        try {
        const artistInfoByID = await infos.getArtist(id);
    
        SPOT.create({
            img: artistInfoByID.images[0].url,
            name: artistInfoByID.name,
            follow: artistInfoByID.followers.total,
            genre: artistInfoByID.genres[0],
            link: artistInfoByID.external_urls.spotify
        }, function(error, data){
            if(error){
                console.log(error);
                console.log("There was a problem adding Spotify to the db");
            }else{
                console.log("Spotify added to database");
            } 
        });

       } catch (err) {
        console.error(err)
        console.log("There was a problem to create SPOT.");
       }
    }
    searchArtist();
    res.redirect("/dashboard")
});

module.exports = router