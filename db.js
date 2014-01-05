var databaseUrl = "test";
var collections = ["words"]
var db = require("mongojs").connect(databaseUrl, collections);
var ejs = require("ejs");

var env = process.env.NODE_ENV || 'development';
var async = require('async');
var _ = require('lodash');

var getUser = function(user, fun) {
    console.log("Making a query for user: "+user);
    db.words.find({who: user}, function(err, users) {
        if( err || !users) 
            console.log("No users found");
        else{
            var tmp = users;
            console.log(users)
            var resulting_array = _.flatten(tmp, 'words');
            resulting_array = _.countBy(resulting_array);
            resulting_array = sort(resulting_array);
            top_ten = resulting_array.reverse();
            console.log(top_ten)
            fun.send({t:top_ten, w:[]});
        }
        return;
    });
};

var sort = function(object) {
    var tuples = _.map(object, function (value, key) { return [key, value]; });
    return _.sortBy(tuples, function (tuple) { return tuple[1]; });
}

exports.getUser = getUser;