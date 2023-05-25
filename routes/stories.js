const express = require('express')
const router = express.Router()
const request = require("request")
const { ensureAuth } = require('../middleware/auth')

const Story = require('../models/Story')

/** edit unsplash widget */
router.get("/edit/:id", ensureAuth, (req, res) => {
    var id = req.params.id;

    Story.findByIdAndDelete(id, function(err){
        if (err) {
            console.log("Error Editing unsplash widget");
            console.log(err);
        } else {
            console.log("updating image from MongoDb: " + id);
            res.redirect("/stories/add")
        }
    });
});

/** delete unsplash widget */
router.get("/delete/:id", ensureAuth, (req, res) => {
    var id = req.params.id;

    Story.findByIdAndDelete(id, function(err){
        if (err) {
            console.log("Error deleting unsplash widget");
            console.log(err);
        } else {
            console.log("Deleting unsplash image from MongoDb: " + id);
            res.redirect("/display/services")
        }
    });
});

/** configure unsplash widget */
router.get('/add', ensureAuth, (req, res) => {
    res.render('stories/add')
})

/** add unsplash widget */
router.get('/', ensureAuth, (req, res) => {
    var searchTerm = req.query.searchterm;
    var pageNumber = req.query.page;

    console.log(searchTerm);
    request("https://api.unsplash.com/search/photos?client_id=6u3YmvmhRNxE9FpIJle7XHhc0pQpi5jg84tn3KFov2Y&query=" + searchTerm + "&page=" + pageNumber, 
    function(errror, response, body) {
        if (errror) {
            console.log("erreur lors de la récuperation de photo!!!");
        } else {
            // res.render("pictures", {
            const picData = JSON.parse(body);
            //     pageNumber: pageNumber
            Story.create({
                link: picData.results[1].urls.small,
                name: picData.results[1].user.name,
                likes: picData.results[1].likes
            }, function(error, data){
                if(error){
                    console.log("There was a problem adding this unsplash image to db");
                }else{
                    console.log("Images added to database");
                    console.log(data);
                } 
            });
            // });
        }
    });
    
    res.redirect("/dashboard")
});

module.exports = router