'use strict';

var genCtrl = require('../controllers/generations.controller');
var typeCtrl = require('../controllers/types.controller');
var statCtrl = require('../controllers/stats.controller');
var abilCtrl = require('../controllers/abilities.controller');

// For each pokemon, we have the generation id. We want to turn that into a generation object.
// We can either
//    1. Loop through the pokemon and make an SQL call to grab the generation based on its generation id
//    2. Loop through the pokemon and make a request to the generations endpoint to get the specific generation
//    3. Get all generations then loop through the pokemon and match them up
async function getAll(db) {
  const poke_SQL = "SELECT p.id, p.identifier, ps.generation_id, ps.id AS 'species_id', PDN.pokedex_number  " +
    "FROM pokemon p JOIN pokemon_species ps ON (p.species_id = ps.id)  " +
    "JOIN pokemon_dex_numbers PDN ON (PDN.species_id = ps.id)  " +
    "WHERE PDN.pokedex_id = 1 AND p.is_default = 1 " +
    "ORDER BY pokedex_number";
  var pokemon = await db.all(poke_SQL);
  pokemon = await addDetails(db, pokemon);
  return pokemon;
}

async function get(db, id) {
  console.log("get");

  var poke_SQL = "SELECT p.*, ps.*, ps.identifier AS 'species_identifier', PDN.*, PDN.pokedex_number " +
    "FROM pokemon p JOIN pokemon_species ps ON (p.species_id = ps.id)  " +
    "JOIN pokemon_dex_numbers PDN ON (PDN.species_id = ps.id)  " +
    "WHERE PDN.pokedex_id = 1 " +
    "AND p.id = " + id;
  var pokemon = await db.all(poke_SQL);
  pokemon = await addDetails(db, pokemon);
  return pokemon;
}

async function addDetails(db, pokemon) {
  console.log("add details");

  for (let i = 0; i < pokemon.length; i++) {
    let poke = pokemon[i];
    poke.types = await typeCtrl.getByPoke(db, poke.id);
    poke.stats = await statCtrl.getByPoke(db, poke.id);
    poke.abilities = await abilCtrl.getByPoke(db, poke.species_id);
    poke.evolutions = await getEvos(db, poke.species_id);
  }
  return pokemon;
}



async function getEvos(db, species_id) {
  console.log("getEvos start");

  const evo_SQL = "SELECT PS2.id AS species_id, PS2.identifier AS species_identifier, PE.*, EC.baby_trigger_item_id, ETP.name AS 'evolution_method', " +
  "PDN.* " +
  "FROM pokemon_species PS " +
  "JOIN evolution_chains EC ON (PS.evolution_chain_id = EC.id) " +
  "JOIN pokemon_species PS2 ON (EC.id = PS2.evolution_chain_id) " +
  "LEFT JOIN pokemon_evolution PE ON (PE.evolved_species_id = PS2.id) " +
  "LEFT JOIN evolution_trigger_prose ETP ON (PE.evolution_trigger_id = ETP.evolution_trigger_id) " +
  "LEFT JOIN pokemon_dex_numbers PDN ON (PDN.species_id = PS2.id)  " +
  "WHERE (local_language_id IS NULL OR local_language_id = 9) AND PS.id = " + species_id + " " +
  " AND PDN.pokedex_id = 1 " +
  "ORDER BY PS2.'order' ASC";
  let evolutions = await db.all(evo_SQL);
  console.log("getEvos");
  for(let i = 0; i < evolutions.length; i++){
    let evo = evolutions[i];
    evo.types = await typeCtrl.getByPoke(db, evo.species_id);
  }
  return evolutions;
}



function arrayAsSQL(arr){
  console.log("ARR b4 stringy:", arr);
  let stringy = ' ( ' + arr.map(function(){ return '?' }).join(',') + ' ) ';
  console.log(stringy)
  return stringy;
}

module.exports.getAll = getAll;
module.exports.get = get;
