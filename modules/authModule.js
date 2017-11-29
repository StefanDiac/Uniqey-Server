module.exports = function(app, Users){
  app.post('/', function(req, res){
      var loginDetails = req.body;
      console.log(req.body);

      Users.findOne({where: {email: req.body.Email}}).then(function(user){
        if(user){
          res.status(200).send('Logged into the user');
        }else{
          Users.create(req.body).then(function(user){
            res.status(200).send('Created a new user');
          });
        }
      })
  });
};
