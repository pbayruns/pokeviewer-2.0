'use strict';


async function getAll(db) {
    const type_SQL = "SELECT t.* FROM types t;";
    const types = await db.all(type_SQL);
    return types;
}

async function get(db, id) {
    const type_SQL = "SELECT t.* FROM types t;" +
        " WHERE t.id = " + id;
    var type = await db.all(type_SQL);
    return type;
}

async function getByPoke(db, poke_id) {
    let type_SQL = "SELECT t.id, t.identifier FROM pokemon_types pt " +
        "JOIN types t ON (pt.type_id = t.id) " +
        "WHERE pt.pokemon_id = " + poke_id;
    return db.all(type_SQL);
}

module.exports.getAll = getAll;
module.exports.get = get;
module.exports.getByPoke = getByPoke;