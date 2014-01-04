var Db = require('mongodb').Db;
var env = process.env.NODE_ENV || 'development';
var async = require('async');
var _ = require('lodash');

var getUser = function(user, fun) {
    Db.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test', function(err, db) {
        if(!err) {
            console.log("We are connected!");
            console.log(db.collection('words').find());//{who:user},function(err, result) {
            //     if (err)
            //         return console.dir(err);
            //     else{
            //         // fun(result);
            //         var db_return = result;//db.words.find({who:name});
            //         console.dir(db_return);
            //         var resulting_array = _.flatten(db_return, 'words');
            //         resulting_array = sort(resulting_array);
            //         var top_ten = _.last(resulting_array,10);
            //         console.log(top_ten);
            //         // db.getUser(mreca);
            //     }
            // });
        }
        else {
            console.log("Error, not connected: " + err);
        }
    });
};

var sort = function(object) {
    var tuples = _.map(object, function (value, key) { return [key, value]; });
    return _.sortBy(tuples, function (tuple) { return tuple[1]; });
}

exports.getUser = getUser;