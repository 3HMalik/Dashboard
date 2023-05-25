const express = require('express')
const router = express.Router()
const request = require("request")
const { ensureAuth } = require('../middleware/auth')

const Meteo = require('../models/Meteo')

/** edit weather widget */
router.get("/edit/:id", ensureAuth, (req, res) => {
    var id = req.params.id;

    Meteo.findByIdAndDelete(id, function(err){
        if (err) {
            console.log("Error Editing weather widget");
            console.log(err);
        } else {
            console.log("updating weather from MongoDb: " + id);
            res.redirect("/weather/add")
        }
    });
});

/** delete weather widget */
router.get("/delete/:id", ensureAuth, (req, res) => {
    var id = req.params.id;

    Meteo.findByIdAndDelete(id, function(err){
        if (err) {
            console.log("Error deleting weather widget");
            console.log(err);
        } else {
            console.log("Deleting weather widget from MongoDb: " + id);
            res.redirect("/display/services")
        }
    });
});

/** configure weather widget */
router.get('/add', ensureAuth, (req, res) => {
    res.render('weather/add')
})

/** add weather widget */
router.get('/', ensureAuth, (req, res) => {
    var searchTerm = req.query.searchterm;

    console.log(searchTerm);
    request("http://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&units=imperial&appid=9389fbd883f0884729b80b6c85be1fbb",
    function(errror, response, body) {
        if (errror) {
            console.log("erreur lors de la récuperation de la météo!!!");
        } else {
            const picData = JSON.parse(body);
            var t = Math.round((Math.round(picData.main.temp) - 32) / 1.8);
            Meteo.create({
                link: picData.weather[0].icon,
                city: searchTerm,
                temp: t,
                humid: picData.main.humidity,
                desc: picData.weather[0].description
            }, function(error, data){
                if(error){
                    console.log("There was a problem adding this weather to the db");
                }else{
                    console.log("Weather added to database");
                    console.log(data);
                } 
            });

        }
    });
    
    res.redirect("/dashboard")
});

module.exports = router