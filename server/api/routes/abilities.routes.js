'use strict';
module.exports = function (app) {

  var abilCtrl = require('../controllers/abilities.controller');


  app.get('/abilities', async (req, res, next) => {

    app.connect(
      async (db) => {
        var pokemon = [];
        var id = req.query.id;
        if(id){
          pokemon = await abilCtrl.get(db, id);
        }else{
          pokemon = await abilCtrl.getAll(db);
        }
        res.json(pokemon);
      }
    );
  });




};