var express = require('express');
var mongoose = require('mongoose');
var app = express();
var port = 3001;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);


mongoose.connect("mongodb://localhost:27017/APIaffiliate");

var providerSchema = new mongoose.Schema({
  Name: String,
  Description: String,
  Domain: String
});

var Provider = mongoose.model("SEOProvider", providerSchema);
/*
var provider1 = new Provider({
  Name: "SEOProvdertestName",
  Description: "TEst description",
  Domain: "https://www.SeoProvider.com"
})

provider1.save(function(err, provider){
  if(err){ //If any errors occurs
    console.log("Wasnt able to save to the database");
  } else {
    console.log("Data was saved to the database");
    console.log(provider);
  }
});
*/
Provider.find({}, function(err, provider){
  if(err){
    console.log("error");
    console.log(err);
  } else {
    console.log("Providers");
    console.log(provider);
  }
})


//Star catches and error
//Should always be at the end
app.get('*', (req, res) => {
  res.send("Unknown path")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
