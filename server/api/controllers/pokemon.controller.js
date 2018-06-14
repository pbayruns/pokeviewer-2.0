'use strict';

var genCtrl = require('../controllers/generations.controller');
var typeCtrl = require('../controllers/types.controller');

// For each pokemon, we have the generation id. We want to turn that into a generation object.
// We can either
//    1. Loop through the pokemon and make an SQL call to grab the generation based on its generation id
//    2. Loop through the pokemon and make a request to the generations endpoint to get the specific generation
//    3. Get all generations then loop through the pokemon and match them up
async function getAll(db) {
  const poke_SQL = "SELECT p.*, ps.* FROM pokemon p JOIN pokemon_species ps ON (p.species_id = ps.id);";
  var pokemon = await db.all(poke_SQL);
  pokemon = await addDetails(db, pokemon);
  return pokemon;
}

async function get(db, id) {
  var poke_SQL = "SELECT p.*, ps.* FROM pokemon p " +
    "JOIN pokemon_species ps ON (p.species_id = ps.id) " +
    " WHERE p.id = " + id;
  var pokemon = await db.all(poke_SQL);
  pokemon = await addDetails(db, pokemon);
  return pokemon;
}

async function addDetails(db, pokemon) {
  for (let i = 0; i < pokemon.length; i++) {
    let poke = pokemon[i];
    poke.types = await typeCtrl.getByPoke(db, poke.id);
    poke.generation = await genCtrl.get(db, poke.generation_id);
  }
  return pokemon;
}

module.exports.getAll = getAll;
module.exports.get = get;
