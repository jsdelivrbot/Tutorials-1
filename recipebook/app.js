var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var dust = require('dustjs-helpers');
var app = express();
const { Pool, Client } = require('pg')

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
  const pool = new Pool({
    connectionString: connectionString,
  })

  pool.query('SELECT * FROM recipes', (err, res) => {
    console.log(err, res)
    pool.end()
  })

  const client = new Client({
    connectionString: connectionString,
  })
  client.connect()

  client.query('SELECT * FROM recipes', (err, res) => {
    console.log(err, res)
    client.end()
  })
});

//Server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});
