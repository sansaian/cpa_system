/**
 * Created by isakhankov on 27.08.17.
 */

import express from 'express';
import offerHelper from './offerHelper';

const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next()
});

// Api version
router.get('/', function (req, res) {
    res.send('API 1.0.0')
});


/**
 *  Advertiser create new offer
 */
router.post('/offer', function (req, res) {
    const offer = req.body;
    const object = offerHelper.saveOffer(offer);

    res.send(object);
});

router.get('/offer/:id', function (req, res) {
    const offer = offerHelper.getOffer(req.params.id);
    if (offer == null) {
        res.status(403).send('Заказ с id: ' + req.params.id + ' не найден');
        return;
    }

    res.send(offer);
});

router.get('/offer', function (req, res) {
    const offers = offerHelper.getOffers();

    res.send(offers);
});

/**
 * Web-master generate unique link to use it in his company
 */
router.post('/offer/:id/link', function (req, res) {
    const link = offerHelper.generateLink(req.params.id);
    if (link == null) {
        res.status(403).send('Заказ с id: ' + req.params.id + ' не найден');
        return;
    }

    res.send(link);
});


router.get('/reward/:id', function (req, res) {
    offerHelper.rewardWebMaster(req.params.id);

    res.send('success');
});

export default router;