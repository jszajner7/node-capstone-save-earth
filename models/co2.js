var mongoose = require("mongoose");
var schema = new mongoose.Schema({});
var co2 = mongoose.model('co2', schema);
exports.co2 = co2
