var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(4000, function(){
    console.log('Server started at port 4000');
});