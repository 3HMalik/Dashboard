const { name } = require('ejs');
const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');
var ip = require("ip");

/** Get The Welcome Page */
router.get('/', (req, res) => res.render('welcome'));
/** Get The Dashboard Page */
router.get('/dashboard', ensureAuth, (req, res) => { 

    res.render('dashboard', {
        name: req.user.local.name,
        name2: req.user.Google.firstName
    })
});


/** This the configuration for about.json */
router.get('/about.json', ensureAuth, (req, res) => { 
    var time = (new Date).getTime()

    res.json({
        "client": {
            "host": ip.address()
        },
        "server": {
            "current_time": time,
            "services": [{
                "name": "Weather",
                "widgets": [{
                    "name": "weather_list",
                    "description": "Display temperature for a city, humidity and description of weather",
                    "params": [{
                        "name": "link",
                        "type": "string"
                    },{
                        "name": "city",
                        "type": "string"
                    },{
                        "name": "temp",
                        "type": "integer"
                    },{
                        "name": "humid",
                        "type": "integer"
                    },{
                        "name": "desc",
                        "type": "string"
                    }]
                }]
            }, {
                "name": "YouTube",
                "widgets": [{
                    "name": "youtube_list",
                    "description": "Display name, image and subscribers of a youtube channel.",
                    "params": [{
                        "name": "img",
                        "type": "string"
                    },{
                        "name": "name",
                        "type": "string"
                    },{
                        "name": "sub",
                        "type": "string"
                    }]
                }, {
                    "name": "youtube_list",
                    "description": "Get a complete description and a link to the channel",
                    "params": [{
                        "name": "name",
                        "type": "string"
                    },{
                        "name": "desc",
                        "type": "string"
                    },{
                        "name": "link",
                        "type": "string"
                    }]
                }]
            }, {
                "name": "Spotify",
                "widgets": [{
                    "name": "spotify_list",
                    "description": "Display name, image and followers of an Artist.",
                    "params": [{
                        "name": "img",
                        "type": "string"
                    },{
                        "name": "name",
                        "type": "string"
                    },{
                        "name": "follow",
                        "type": "string"
                    }]
                }, {
                    "name": "spotify_list",
                    "description": "Get type of content and a link to Artist's spotify page",
                    "params": [{
                        "name": "name",
                        "type": "string"
                    },{
                        "name": "genre",
                        "type": "string"
                    },{
                        "name": "link",
                        "type": "string"
                    }]
                }]
            }, {
                "name": "Unsplash",
                "widgets": [{
                    "name": "stories",
                    "description": "get free Photos from unsplash to use.",
                    "params": [{
                        "name": "link",
                        "type": "string"
                    },{
                        "name": "name",
                        "type": "string"
                    },{
                        "name": "likes",
                        "type": "string"
                    }]
                }]
            }]
        }
    })

});



module.exports = router;