var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.send("HI FROM THE ROOT ROUTE");
});

app.use('/api/todos', todoRoutes);

app.listen(port, function() {
  console.log("APP IS RUNNING ON " + port);
});
