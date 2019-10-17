var express = require('express');
module.exports = (Collection) => {

  //The following crud operations are 'Middleware functions'

  

  //Read
  const readMany = (req, res) => {
    let query = res.locals.query  || {};
  
    Collection.find(query, (err,result) => {
      if(err) {
        res.status(500).send(e);
        console.log("Activity log: " + e.message);
        console.log('Activity log:', Date())
      } else {
        res.send(result);
        console.log("Activity log: readMany was Successful")
        console.log('Activity log:', Date())
      }
    });
  };


//=======
//Routes
//=======

let router = express.Router();
router.get('/read',readMany);


return router;
}

/*
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

//GET home page.
router.get('/seoproviders', function(req, res) {

  //Create connection to database and define mongoose schema (will instantiate and object for CRUD)
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


// .find() will return results from the mongodb
  Provider.find({}, function(err, provider){
    if(err){
      console.log("an error has occured!");
      console.log(res.json(err));
    } else {
      console.log("Results from database (Providers):");
      console.log(res.json(provider));
    }
  });
  res.send(JSON.stringify(Provider))

})

module.exports = router;
*/