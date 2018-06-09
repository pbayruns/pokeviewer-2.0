var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;


// All routes in the API
var routes = [
  require('./api/routes/pokemon.routes')
]

// Loop through all routes and register them with the app
for (let i = 0; i < routes.length; i++) {
  let route = routes[i];
  route(app);
}



connect = () => {
  const sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('./db/veekun-pokedex.sqlite', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the veekun database.');
  });
  db.close = () => {
    db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Close the database connection.');
    });
  }
  return db;
}
app.connect = connect;
app.listen(port);

console.log('Pokeviewer API server started on port ' + port);


