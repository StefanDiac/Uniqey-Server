module.exports = function(app, Users, UIDs){
  //Useful endpoints for testing

  app.get('/admin/showUsers', function(req,res){
    Users.findAll().then(function(users){
      if(users){
        res.status(200).send(users);
      } else {
        res.status(404).send('No one is using the app');
      }
    })
  });

  app.get('/admin/showUIDs', function(req,res){
    UIDs.findAll({attributes: ["UID", "Type", "Email"]}).then(function(uids){
      if(uids){
        res.status(200).send(uids);
      }else{
        res.status(404).send('No UIDs found');
      }
    });
  })

  app.delete('/admin/purge/:password', function(req,res){
    var passwordEntry = req.params.password;
    if(passwordEntry === '1234') {

      UIDs.destroy({where:{}, truncate: true});
      Users.destroy({where:{}, truncate: true});

      res.status(204).send('Purge completed');
    } else {
      res.status(404).send('You are not an admin');
    }
  })
}
