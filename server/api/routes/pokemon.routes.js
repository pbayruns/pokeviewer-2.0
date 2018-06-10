'use strict';
module.exports = function (app) {

  //var pokemon = require('../controllers/pokemon.controller');


  app.get('/pokemon', async (req, res, next) => {

    app.connect(
      async (db) => {
        const pokemon = await getAllPokemon(db);
        for (let i = 0; i < pokemon.length; i++) {
          let poke = pokemon[i];
          poke.types = await getTypesForPokemon(poke.id, db);
        }
        res.json(pokemon);
      }
    );
  });


  function getAllPokemon(db){
    const poke_SQL = "SELECT p.* FROM pokemon p;";
    return db.all(poke_SQL);
  }

  function getTypesForPokemon(poke_id, db) {
      let type_SQL = "SELECT t.id, t.identifier, t.generation_id FROM pokemon_types pt " +
        "JOIN types t ON (pt.type_id = t.id) " +
        "WHERE pt.pokemon_id = " + poke_id;
      return db.all(type_SQL);
  }

};