'use strict';
module.exports = function (app) {

  //var pokemon = require('../controllers/pokemon.controller');

  app.get('/pokemon', (req, res) => {
    let db = app.connect();
    let sql = `SELECT * FROM pokemon;`;

    db.all(sql, [], (err, rows) => {
      if (err) {
        db.close();
        throw err;
      }
      res.json(rows);
      db.close();
    });
  }
  );

};