var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect("mongodb://localhost/test_app")

var providerSchema = new mongoose.Schema({
  Name: String,
  Description,
  Domain
});

var Provider = mongoose.model("SEOProvider", providerSchema);

Provider.create()

/* GET home page. */
router.get('/', function(req, res) {
  res.send('test2');
});

module.exports = router;
