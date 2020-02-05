var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/DB';
var express = require('express');
var app = express();
var db = mongoose.connection;
app.get('/', function(req, res) {
    res.send('Hello World!');
});
app.listen(3000, function() {
    console.log('Express App listening on port 3000!')
});
mongoose.connect(url);
db.on('connected', function() {
    console.log('Mongoose connected');
});
db.on('error', function(err) {
    console.log('Mongoose error: ' + err);
});
var userSchema = mongoose.Schema({
    username : String,
    mail: String,
    password: String,

    isAlive: Boolean
}, {
    collection: 'users'
});
var User = mongoose.model('User', userSchema);
var new_user = {
    username : 'Snow3all',
    mail: 'Netithorn_rly@hotmail.com' ,
    password: 'Netithorn985412' ,
    isAlive: false
};
User.create(new_user, function(err) {
    if (err) return err;
    console.log('Saved!');
});