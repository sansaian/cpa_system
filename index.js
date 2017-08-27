/**
 * Created by isakhankov on 27.08.17.
 */

var express = require('express');
var api = require('./api');

var app = express();

app.use('/api', api);

app.get('/*', function(req, res){
    res.send('SPA');
});

app.listen(3000);