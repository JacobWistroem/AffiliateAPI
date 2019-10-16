const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/APIaffiliate", {useNewUrlParser: true});
var providerSchema = new mongoose.Schema({
  Name: String,
  Description: String,
  Domain: String,
  Date: String,
  Category: Array,
  Image: String
});

const models = {};
models.Provider = mongoose.model('seoprovider', providerSchema);

module.exports = models;