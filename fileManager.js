/**
 * Created by isakhankov on 27.08.17.
 */
var fs = require('fs');
var offers = require('./public/offers.json');

var fileManager = {};

fileManager.saveOffer = function (object) {
    offers.push(object);
    fs.writeFile('./public/offers.json', JSON.stringify(offers), function() {});
};

module.exports = fileManager;