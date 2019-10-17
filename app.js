var express = require('express');
var app = express();
var port = 3001;
const cors = require('cors')
const bodyParser = require('body-parser');
const models = require('./models/models');
//Allow React from port 3000 to connect to our API route
const corsOptions = {
  origin: 'http://localhost:3000'
}

//Middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send("test page")
})


app.use('/api',cors(corsOptions), require('./routes/api')(models.Provider));

//app.use('/api', seoproviders);
//router.use('/api/articles', articles)
/*
mongoose.connect("mongodb://localhost:27017/APIaffiliate");

var providerSchema = new mongoose.Schema({
  Name: String,
  Description: String,
  Domain: String,
  Date: String,
  Category: Array,
  Image: String
});

var Provider = mongoose.model("SEOProvider", providerSchema);
*/

//Create a Provider in the database SEOProvider collection
/*
var provider1 = new models.Provider({
  Name: "Accuranker",
  Description: "TEst description12312312",
  Domain: "https://www.Accuranker.com",
  Date: "16-10-2019",
  Category: ["Tag2", "Tag23", "Tag66"]
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
/*
Provider.find({}, function(err, provider){
  if(err){
    console.log("error");
    console.log(err);
  } else {
    console.log("Providers");
    console.log(provider);
  }
});
*/

//Star catches and error
//Should always be at the end
app.get('*', (req, res) => {
  res.send("Unknown path")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
