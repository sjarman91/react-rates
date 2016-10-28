'use strict';

const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser')
const apiRouter = require('./server/routes');

const db = require('./models').db
const getData = require('./server/db-requests')

const app = express();

app.use(volleyball);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use('/api', apiRouter);

app.use(express.static(__dirname));

app.get('/api', function (req, res) {
  console.log('you hit the api')
  res.send('you hit the api');
});

db.sync({force: true})
  .then(function(){
    console.log('db synced')
  })
  .then(function(){
    app.listen(3000, function () {
      console.log('Server listening on port', 3000);
    });
  })
  .then(function(){
    getData.update30()
    getData.update10()
  })



