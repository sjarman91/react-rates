const express = require('express');
var router = express.Router();
var models = require('../models')

var request = require('request')
var Ten = models.Ten
var Thirty = models.Thirty


router.get('/', function (req, res, next) {
  res.send('you hit the api')
})

router.get('/tens', function (req, res, next){
  Ten.findAll()
    .then(ratesArr => res.json(ratesArr))
    .catch(next)

})

router.get('/thirties', function (req, res, next){
  Thirty.findAll()
    .then(ratesArr => res.json(ratesArr))
    .catch(next)

})

module.exports = router;
