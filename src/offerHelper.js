/**
 * Created by isakhankov on 27.08.17.
 */
import fs from "fs";
import path from 'path';

const helper = {};
const offers = JSON.parse(fs.readFileSync(path.join(process.cwd(), './build/public/offers.json'), 'utf8'));

helper.saveOffer = function (offer) {
    offer.id = guid();
    offer.links = [];

    offers.push(offer);

    fs.writeFile(path.join(process.cwd(), './build/public/offers.json'), JSON.stringify(offers), function () {
    });

    return offer;
};

helper.getOffer = function (id) {
    const index = offers.findIndex(x => x.id == id);
    if (index == -1) return null;

    return offers[index];
};

helper.getOffers = function () {

    return offers;
};

helper.generateLink = function (offerId) {
    const index = offers.findIndex(x => x.id == offerId);
    if (index == -1) return null;

    const offer =  offers[index];
    let uniqueLink = guid();
    offers[index].links.push(uniqueLink);
    fs.writeFile(path.join(process.cwd(), './build/public/offers.json'), JSON.stringify(offers), function () {
    });

    return offer.url + '/' + uniqueLink;
};

helper.rewardWebMaster = function (uniqueId) {
    const index = offers.findIndex(x => x.links.findIndex(y => y.id == uniqueId) != -1);
    if (index == -1) return false;

    const offer =  offers[index];

    const webmaster = offer.links[offer.links.findIndex(y => y.id == uniqueId)].webmaster;

    //TODO increase balance, take money from advertiser

    return true;
};

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

export default helper;