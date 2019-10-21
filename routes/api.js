var express = require('express');

module.exports = (Collection) => {

  //The following crud operations are 'Middleware functions'

  //=======
  //Create
  //=======
  const create = (req, res) => {
    const newEntry = req.body;
    Collection.create(newEntry, (err,newEntry) => {
      if(err) {
        console.log(err);
        res.sendStatus(500);
        console.log("Activity log: [Create] " + err.message);
        console.log('Activity log:', Date())
      } else {
        res.send(newEntry);
        console.log("Activity log: 'Create' was Successful")
        console.log('Activity log:', Date())
      }
    });
  };

  //Read
  const readMany = (req, res) => {
    let query = res.locals.query  || {};
  
    Collection.find(query, (err,result) => {
      if(err) {
        res.status(500).send(err);
        console.log("Activity log: " + err.message);
        console.log('Activity log:', Date())
      } else {
        res.send(result);
        console.log("Activity log: readMany was Successful")
        console.log('Activity log:', Date())
      }
    });
  };

  // ========
  // Read one
  // ========
  const readOne = (req, res) => {
    const { _id } = req.params;
  
    Collection.findById(_id, (err,result) => {
      if(err) {
        res.status(500).send(err);
        console.log("Activity log: [Read Specific] " + err.message);
        console.log('Activity log:', Date())
      } else {
        res.send(result);
        console.log("Activity log: Read Specific was a success");
        console.log('Activity log:', Date())
      }
    });
  };


  // ======
  // Update
  // ======
  const update = (req, res) => {
    const changedEntry = req.body;
    Collection.update({ _id: req.params._id }, { $set: changedEntry }, (err) => {
      if (err){
        console.log("Activity log: [Update] " + err.message);
        console.log('Activity log:', Date())
        res.sendStatus(500);
         } else {
        res.sendStatus(200);
        console.log("Activity log: Update was a success");
        console.log('Activity log:', Date())
         }
    });
  };

  // ======
  // Remove
  // ======
  const remove = (req, res) => {
    Collection.remove({ _id: req.params._id }, (err) => {
      if (err){
      res.status(500).send(err);
      console.log("Activity log: [Delete] " + err.message);
      console.log('Activity log:', Date())
      } else {
        res.sendStatus(200);
        console.log("Activity log: Update was a success");
        console.log('Activity log:', Date())
      }
    });
  };



//=======
//Routes
//=======

let router = express.Router();
router.post('/create', create);
router.get('/read', readMany);
router.get('/read/:_id', readOne);
router.put('/update/:_id', update);
router.delete('/delete/:_id', remove);


return router;
}