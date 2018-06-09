'use strict';
module.exports = function (app) {

  //var pokemon = require('../controllers/pokemon.controller');


  app.get('/pokemon', async (req, res, next) => {
    try {
      const db = await app.connect();
      const poke_SQL = "SELECT p.* FROM pokemon p;";
      const pokemon = await db.all(poke_SQL);

      for (let i = 0; i < pokemon.length; i++) {
        let poke = pokemon[i];
        poke.types = await getTypesForPokemon(poke.id, db);
      }
      app.close(db);
      res.json(pokemon);
    } catch (err) {
      next(err);
    }
  });


  function getTypesForPokemon(poke_id, db) {
    try {
      let type_SQL = "SELECT t.id, t.identifier, t.generation_id FROM pokemon_types pt " +
        "JOIN types t ON (pt.type_id = t.id) " +
        "WHERE pt.pokemon_id = " + poke_id;
      return db.all(type_SQL);
    } catch (err) {
      next(err);
    }
  }

};