const express = require('express')
const router = express.Router()
const request = require("request")
const channelinfo = require('yt-channel-info')
const { ensureAuth } = require('../middleware/auth')

const YT = require('../models/YT')

/** edit youtube widget */
router.get("/edit/:id", ensureAuth, (req, res) => {
    var id = req.params.id;

    YT.findByIdAndDelete(id, function(err){
        if (err) {
            console.log("Error Editing YT widget");
            console.log(err);
        } else {
            console.log("updating YT from MongoDb: " + id);
            res.redirect("/youtube/add")
        }
    });
});

/** delete youtube widget */
router.get("/delete/:id", ensureAuth, (req, res) => {
    var id = req.params.id;

    YT.findByIdAndDelete(id, function(err){
        if (err) {
            console.log("Error deleting YT widget");
            console.log(err);
        } else {
            console.log("Deleting YT widget from MongoDb: " + id);
            res.redirect("/display/services")
        }
    });
});

/** configure a widget */
router.get('/add', ensureAuth, (req, res) => {
    res.render('yt_view/add')
})

/** add a youtube widget to the database */
router.get("/", ensureAuth, (req,res) => {
    var name = req.query.searchTerm

    channelinfo.getChannelInfo(name, 3).then((response) => {
        // console.log(response);
        const picData = response;
        YT.create({
            img: picData.authorThumbnails[0].url,
            name: picData.author,
            sub: picData.subscriberText,
            desc: picData.description,
            link: picData.authorUrl
        }, function(error, data){
            if(error){
                console.log("There was a problem adding Youtube to the db");
            }else{
                console.log("Youtube added to database");
            } 
        });
    }).catch((err) => {
       console.log(err)
    })

    channelinfo.getChannelInfo(name, 2).then((response) => {
        // console.log(response);
        const picData = response;
        YT.create({
            img: picData.authorThumbnails[0].url,
            name: picData.author,
            sub: picData.subscriberText,
            desc: picData.description,
            link: picData.authorUrl
        }, function(error, data){
            if(error){
                console.log("There was a problem adding Youtube to the db");
            }else{
                console.log("Youtube added to database");
            } 
        });
    }).catch((err) => {
       console.log(err)
    })

    channelinfo.getChannelInfo(name, 1).then((response) => {
        // console.log(response);
        const picData = response;
        YT.create({
            img: picData.authorThumbnails[0].url,
            name: picData.author,
            sub: picData.subscriberText,
            desc: picData.description,
            link: picData.authorUrl
        }, function(error, data){
            if(error){
                console.log("There was a problem adding Youtube to the db");
            }else{
                console.log("Youtube added to database");
            } 
        });
    }).catch((err) => {
       console.log(err)
    })

    res.redirect("/dashboard")
});

module.exports = router