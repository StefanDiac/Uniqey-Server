module.exports = function(app, UIDs){

  app.post('/generate', function(req, res){
      console.log("here");
      var uidDetails = req.body;
      var randomNumber = guid();

      var uidDbObject = {uid: randomNumber, Type: uidDetails.Type, Email: uidDetails.Email};
      UIDs.create(uidDbObject).then(function(uid){
        console.log(uidDbObject);
        res.status(200).send(uid);
      });
  });
};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
