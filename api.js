/**
 * Created by isakhankov on 27.08.17.
 */

var express = require('express');
var fileManager = require('./fileManager');

var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next()
});

// Api version
router.get('/', function (req, res) {
    res.send('API 1.0.0')
});

router.post('/offer', function (req, res) {
    var offer = req.body;

    fileManager.saveOffer (offer, function(err) {
        if (err) {
            res.status(404).send('Offer not saved');
            return;
        }

        res.send('Offer saved');
    });

    res.send(req.body.test);
});




module.exports = router;