var express = require('express');
var router = express.Router();

module.exports = router;

/* GET cities. */
router.get('/cities', function(req, res, next) {
    var cities = ["DEN", "DFW", "MIA,", "MCO"];
    res.send(cities);
});


/* GET itineraries. */
router.get('/search', function(req, res, next) {
    var dataFile = __dirname + '/sample-response.json';
    res.sendFile(dataFile);
});

