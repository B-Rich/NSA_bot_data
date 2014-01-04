var express = require('express');
var db = require('./db.js');
var _ = require('lodash');

var app = express();
app.use(express.static(__dirname + '/public'));

var test = {
	title: 'mreca',
	supplies: ["Type help to see all available commands.","test", "test2", "test3"]
}
var request = {};

app.get('/',function(req, res){
	res.render('index.ejs');
});

app.get('/getuser',function(req,res){
	var name = req.query.u;
	request.who = name;
	if (typeof name === "undefined"){
		res.send({"error":"No username given"});
	}
	else {
		words = db.getUser(name,res);
		request.words = words;
		// new EJS({url: '/index.ejs'}).update('my_element', {supplies: ['mop']})
	}
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});