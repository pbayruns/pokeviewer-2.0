'use strict';


async function getAll(db) {
    const abil_SQL = "SELECT A.* FROM abilities A;";
    const abilities = await db.all(abil_SQL);
    return abilities;
}

async function get(db, id) {
    const abil_SQL = "SELECT * FROM abilities A " +
    "JOIN ability_prose AP ON (AP.ability_id = A.id)"
        " WHERE AP.local_language_id = 9 AND A.id = " + id;
    var type = await db.all(abil_SQL);
    return type;
}

async function getByPoke(db, poke_id){
    const abil_SQL = "SELECT * " + 
    "FROM pokemon_abilities PA " + 
    "JOIN abilities A ON (PA.ability_id = A.id) " +
    "WHERE PA.pokemon_id = " + poke_id;
    return await db.all(abil_SQL);
  }

module.exports.getAll = getAll;
module.exports.get = get;
module.exports.getByPoke = getByPoke;