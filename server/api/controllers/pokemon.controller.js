'use strict';


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

  async function get(db, id){
    var poke_SQL = "SELECT p.*, ps.* FROM pokemon p " +
                    "JOIN pokemon_species ps ON (p.species_id = ps.id) " +
                    " WHERE p.id = " + id;
    var pokemon = await db.all(poke_SQL);
    pokemon = await addDetails(db, pokemon);
    return pokemon;
  }

  async function addDetails(db, pokemon){
    for (let i = 0; i < pokemon.length; i++) {
      let poke = pokemon[i];
      poke.types = await getTypes(poke.id, db);
      poke.generation = await getGeneration(poke.generation_id, db);
    }
    return pokemon;
  }

  async function getGeneration(generation_id, db) {
    const gen_SQL = "SELECT g.*, r.identifier AS 'region_identifier', r.id AS 'region_id' FROM generations g " +
      "JOIN regions r ON (g.main_region_id = r.id) " +
      "WHERE g.id = " + generation_id;
    return db.all(gen_SQL);
  }

  async function getTypes(poke_id, db) {
    let type_SQL = "SELECT t.id, t.identifier, t.generation_id FROM pokemon_types pt " +
      "JOIN types t ON (pt.type_id = t.id) " +
      "WHERE pt.pokemon_id = " + poke_id;
    return db.all(type_SQL);
  }

module.exports.getAll = getAll;
module.exports.get = get;
