var express = require("express");

var router = express.Router();

// Import the model
var burger = require("../models/burger.js");

// Declare the routes
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// Export the routes
module.exports = router;