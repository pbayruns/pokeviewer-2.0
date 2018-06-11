'use strict';

  function get(db, gen_id){
    const gen_SQL = "SELECT g.*, r.identifier AS 'region_identifier', r.id AS 'region_id' FROM generations g " +
    " JOIN regions r ON (g.main_region_id = r.id);";
    return db.all(gen_SQL);
  }

  function getAll(db){
    const gen_SQL = "SELECT g.*, r.identifier AS 'region_identifier', r.id AS 'region_id' FROM generations g " +
    " JOIN regions r ON (g.main_region_id = r.id);";
    return db.all(gen_SQL);
  }

module.exports.getAll = getAll;
module.exports.get = get;