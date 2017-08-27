/**
 * Created by isakhankov on 27.08.17.
 */

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(3000);