/**
 * Created by isakhankov on 27.08.17.
 */

var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next()
});

// define the home page route
router.get('/', function (req, res) {
    res.send('API 1.0.0')
});


module.exports = router;