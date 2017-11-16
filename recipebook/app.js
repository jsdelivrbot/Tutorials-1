var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var dust = require('dustjs-helpers');
var app = express();
const { Client } = require('pg')

//DB Connect String
// const connect = 'postgresql://Waru:123@localhost/recipeDB';
const connectionString = 'postgresql://Waru:123@localhost:5433/recipeDB';


//Assign Dust engine to .dust Files
app.engine('dust', cons.dust);

//Set Default Ext .dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

//Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {

  var client = new Client({
    connectionString: connectionString,
  })
  client.connect()

  client.query('SELECT * FROM recipes', (err, result) => {
    // console.log(err, res);
    console.log('resultzzzzz', result);
    res.render('index', {recipes: result.rows});
    client.end()
  })
});

app.post('/add', function(req, res) {
  var client = new Client({
    connectionString: connectionString,
  })
  client.connect();

  client.query("INSERT INTO recipes(name, ingredients, directions) VALUES($1, $2, $3)",
    [req.body.name, req.body.ingredients, req.body.directions])
    .then(res.redirect('/'));
});

app.delete('/delete/:id', function(req, res) {
  var client = new Client({
    connectionString: connectionString,
  });
  client.connect();
  client.query("DELETE FROM recipes WHERE id = $1", [req.params.id]);
});

app.post('/edit', function(req, res) {
  var client = new Client({
    connectionString: connectionString,
  });
  client.connect();
  console.log('idddddddddddddddd', req.body.id);
  client.query("UPDATE recipes SET name=$1, ingredients=$2, directions=$3 WHERE id = $4",
    [req.body.name, req.body.ingredients, req.body.directions, req.body.id])
    .then(res.redirect('/'));
});

//Server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});
