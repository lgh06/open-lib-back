var express = require('express');
var router = express.Router();
var User = require('../models/user');



/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  User.create({name:"liugehuan",password:"ijosiojs"});
  User.find({name:"liugehuan"}).then(function(data) {
    res.json(data);
  });
});

module.exports = router;
