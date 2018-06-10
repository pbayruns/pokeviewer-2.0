'use strict';
module.exports = function (app) {

  //var pokemon = require('../controllers/pokemon.controller');


  app.get('/types', async (req, res, next) => {
    app.connect(
      async (db) => {
        const type_SQL = "SELECT t.* FROM types t;";
        const types = await db.all(type_SQL);
        res.json(types);
      }
    );
  });

};