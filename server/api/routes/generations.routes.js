'use strict';
module.exports = function (app) {

  var genCtrl = require('../controllers/generations.controller');

  app.get('/generations', async (req, res, next) => {
    app.connect(
      async (db) => {
        var id = req.query.id;
        var generations;
        if(id){
            generations = await genCtrl.get(db, id);
        }else {
            generations = await genCtrl.getAll(db);
        }
        res.json(generations);
      }
    );
  });
};