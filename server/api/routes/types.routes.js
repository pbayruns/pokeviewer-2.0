'use strict';
module.exports = function (app) {

  var typeCtrl = require('../controllers/types.controller');


  app.get('/types', async (req, res, next) => {
    app.connect(
      async (db) => {
        var types = [];
        var id = req.query.id;
        if(id){
          types = await typeCtrl.get(db, id);
        }else{
          types = await typeCtrl.getAll(db);
        }
        res.json(types);
      }
    );
  });

};