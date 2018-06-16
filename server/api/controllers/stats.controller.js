'use strict';


async function getAll(db) {
    const stat_SQL = "SELECT s.* FROM stats s;";
    const stats = await db.all(type_SQL);
    return stats;
}

async function get(db, id) {
    const stat_SQL = "SELECT s.* FROM stats s;" +
        " WHERE s.id = " + id;
    const stat = await db.all(type_SQL);
    return stat;
}

async function getByPoke(db, poke_id) {
    let stat_SQL = "SELECT s.*, ps.* " +
    "FROM stats s " +
    "JOIN pokemon_stats ps ON (s.id = ps.stat_id) " +
    "WHERE ps.pokemon_id = " + poke_id;
    return db.all(stat_SQL);
}


module.exports.getAll = getAll;
module.exports.get = get;
module.exports.getByPoke = getByPoke;