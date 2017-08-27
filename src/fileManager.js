/**
 * Created by isakhankov on 27.08.17.
 */
import fs from "fs";
import path from 'path';

const fileManager = {};
const content = JSON.parse(fs.readFileSync(path.join(process.cwd(), './build/public/offers.json'), 'utf8'));

fileManager.saveOffer = function (object) {
    object.id = guid();
    content.push(object);
    fs.writeFile(path.join(process.cwd(), './build/public/offers.json'), JSON.stringify(content), function () {
    });
};

fileManager.getOffer = function (id) {
    const index = content.findIndex(x => x.id == id);
    if (index == -1) return null;

    return content[index];
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

export default fileManager;