var express = require('express');
var app = express();
var port = process.env.PORT || 8000

app.get('/', function(req, res) {
  res.send("HI THERE FROM EXPRESS!");
})
app.listen(port, function() {
  console.log("APP IS RUNNING ON " + port);
});
