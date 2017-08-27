/**
 * Created by isakhankov on 27.08.17.
 */

var express = require('express');
var bodyParser = require('body-parser');
var api = require('./api');

var app = express();
// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//allow to wirte to public directory
app.use(express.static('public'));

app.use('/api', api);

app.get('/*', function(req, res){
    res.send('SPA');
});

app.listen(3000);