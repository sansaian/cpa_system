/**
 * Created by isakhankov on 27.08.17.
 */

import express from 'express';
import fileManager from './fileManager';

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

router.post('/offer', function (req, res) {
    const offer = req.body;
    fileManager.saveOffer(offer);

    res.send('OK');
});


export default router;