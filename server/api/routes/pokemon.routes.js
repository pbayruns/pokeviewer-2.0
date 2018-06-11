'use strict';
module.exports = function (app) {

  var pokeCtrl = require('../controllers/pokemon.controller');


  app.get('/pokemon', async (req, res, next) => {

    app.connect(
      async (db) => {
        var pokemon = [];
        var id = req.query.id;
        if(id){
          pokemon = await pokeCtrl.get(db, id);
        }else{
          pokemon = await pokeCtrl.getAll(db);
        }
        res.json(pokemon);
      }
    );
  });




};