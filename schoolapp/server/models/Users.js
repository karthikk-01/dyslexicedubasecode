var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    firstName: {type: String, default: ' '},
    lastName: {type: String, default: ' '},
    userName: {type: String, default: ' '},
    password: {type: String, default: ' '},
});

module.exports = mongoose.model('users', userSchema);