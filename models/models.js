const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/APIaffiliate", {useUnifiedTopology: true, useNewUrlParser: true});
var providerSchema = new mongoose.Schema({
  Name: String,
  Description: String,
  Domain: String,
  Date: String,
  Category: Array,
  Image: String
});

const models = {};
//Here i can create multiple models within the model object, and refer to them through the .
models.Provider = mongoose.model('seoprovider', providerSchema);

module.exports = models;