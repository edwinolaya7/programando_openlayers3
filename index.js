var express = require('express');
var nunjucks = require("nunjucks");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static('View'));
//app.use(express.static('Controller'));
app.use(express.static('Model'));
app.use(express.static('Public'));

var bodyParser = require("body-parser");

nunjucks.configure(__dirname + "/View", {
	express : app
});

app.use(bodyParser.urlencoded({extended: false}));

//programacion de eventos
app.get('/', function(req, res){
	res.write(nunjucks.render('mapa.html'));
	res.end();
});


app.listen(3000, function(){
	console.log("servidor ejecutandose!!!");
});
