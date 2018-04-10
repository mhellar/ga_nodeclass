//import express
var express = require('express');

var app = express();

var server = app.listen(3030);

app.use(express.static('public'));

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
})