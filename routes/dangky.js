var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/dangky.controller');

router.get('/login', homeCtrl.index );


router.post.login('/login' , homeCtrl.postLogin);

router.get('/index', function(req, res, next) {


 
  res.render('login/index')
});