//WAZNE
//
// Dziala tylko jesli dodam rozszerzenie https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US  do chrome'a. Bez tego nie dziala dopoki baza danych jest na moim PC
//
//Trzeba zmodyfikowac kod tak zeby bez rozszerzenia glowny program mogl sie odwolywac do mongo stojacym na localhoscie. Jak baza będzie na oddzielnym serwerze nie bedzie problemow.

//TAKI ERROR BEZ TEGO
//Failed to load http://localhost:8080/api/leki: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

const express = require('express');
const routes = require('./api.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/drugDB');
mongoose.Promise = global.Promise;

//serving files (folder name)
//app.use(express.static('../../../src'));

app.use(bodyParser.json());

//initialize routes
app.use('/api', routes);

//error handling middleware
app.use(function(err, req, res, next){
    res.send({error: err.message})
})


//port na ktorym stoi baza
app.listen(process.env.port || 8080, function(){
    console.log('listening')
})