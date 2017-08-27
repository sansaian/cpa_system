/**
 * Created by isakhankov on 27.08.17.
 */
var fs = require('fs');

var fileManager = {};

fileManager.saveOffer = function (object, callback) {
    fs.writeFile('./public/offers.json', JSON.stringify(object), callback);
};

module.exports = fileManager;