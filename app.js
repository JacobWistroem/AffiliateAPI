var express = require('express');
var app = express();
var port = 3001;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);



//Star catches and error
//Should always be at the end
app.get('*', (req, res) => {
  res.send("Unknown path")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
