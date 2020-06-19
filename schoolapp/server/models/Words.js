var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wordsSchema = new Schema({
    word: {type: String, default: ' '},
});

module.exports = mongoose.model('words', wordsSchema);