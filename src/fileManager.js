/**
 * Created by isakhankov on 27.08.17.
 */
import fs from "fs";
import offers from "../build/public/offers";

var fileManager = {};

fileManager.saveOffer = function (object) {
    offers.push(object);
    fs.writeFile('../build/public/offers.js', JSON.stringify(offers), function () {
    });
};

fileManager.getOffer = function (object) {

};

export default fileManager;