var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect('mongodb://localhost/yourDataBase', {useMongoClient: true}); 


mongoose.Promise = Promise; //allows us to use .then on promises instead of cb functions

module.exports.Todo = require("./todo");
