module.exports = function(app, UIDs, Users){

  app.get('/displayMyUIDs/:email', function(req, res){
      var email = req.params.email;
      UIDs.findAll({attributes: ["UID", "Type"], where: {email: email}}).then(function(uidFiltered){
        if(uidFiltered){
          console.log(uidFiltered);
          res.status(200).send(uidFiltered);
        } else {
          res.status(404).send()
        }
      });
  });

  app.get('/displayMyUIDs/filteredBy/:type/:email', function(req, res){
    var filterType = req.params.type;
    filterType = filterType.replace("-", " ");
    var email = req.params.email;
    UIDs.findAll({attributes: ["UID"], where: {email: email, Type: filterType}}).then(function(uidFiltered){
      if(uidFiltered){
        res.status(200).send(uidFiltered);
      } else {
        res.status(404).send()
      }
    });
  });

  app.put('/displayMyUIDs/update/:uid/:email', function(req, res){
    var uid = req.params.uid;
    var email = req.params.email;
    UIDs.update(req.body,{where: {Email:email, UID: uid}}).then(function(){
      res.status(201).send('Updated');
    }).catch(function(error){
      res.status(404).send('Nothing to update');
    });
  });

  app.delete('/displayMyUIDs/delete/:uid/:email', function(req, res){
    var uid = req.params.uid;
    var email = req.params.email;
    // UIDs.findOne({attributes: ["id","UID","Type","Email","createdAt","updatedAt"], where: {Email: email, UID: uid}}).then(function(uidToDelete){
    //   if(uidToDelete){
    //     uidToDelete.destroy({where: {Email: email, UID: uid}}).then(function(){
    //       res.status(204).send("Destoryed");
    //     }).catch(function(error){
    //       res.status(200).send(error);
    //     });
    //   } else {
    //     res.status(404).send("Nothing to destory");
    //   }
    // });
    UIDs.destroy({where: {Email:email, UID: uid}}).then(function(){
      res.status(204).send("Destroyed");
    }).catch(function(error){
      res.status(200).send("Nothing to destroy");
    });
  });
};
