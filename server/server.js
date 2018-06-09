var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

// Setup CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//////// Mount All Routes //////////////
var routes = [
  require('./api/routes/pokemon.routes')
]
// Loop through all routes and register them with the app
for (let i = 0; i < routes.length; i++) {
  let route = routes[i];
  route(app);
}

/////Database Connection and Close////
connect = () => {
  const sqlite = require('sqlite');
  const dbPromise = sqlite.open('./db/veekun-pokedex.sqlite', { Promise });
  return dbPromise;
}

close = (db) => {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connection closed.');
  });
}

app.connect = connect;
app.close = close;

// Start server
app.listen(port);
console.log('Pokeviewer API server started on port ' + port);


