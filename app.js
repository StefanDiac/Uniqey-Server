var express = require('express');
var Sequelize = require('sequelize');
var cors = require('cors');
var addUIDModule = require('./modules/addUIDModule');
var displayModule = require('./modules/displayModule');
var adminModule = require('./modules/adminModule');
var authModule = require('./modules/authModule');


var sequelize = new Sequelize('uniqeyDB','root','',{
  dialect:'sqlite',
  host:'localhost',
  storage: './sql/uniqeyDB.db'
});

sequelize.authenticate().then(function(){
  console.log('Got into the database chief');
});

var Users = sequelize.define('Users',{
  name: Sequelize.STRING,
  Email: Sequelize.STRING
});

var UIDs = sequelize.define('UIDs',{
  uid: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  Type: Sequelize.STRING,
  Email: Sequelize.STRING
});

var app = express();

//app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//app.use(express.static('./public'));

var userEmail = null;

authModule(app, Users);
displayModule(app, UIDs);
addUIDModule(app, UIDs);
adminModule(app, Users, UIDs);

app.listen(3505);
