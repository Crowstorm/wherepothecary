const express = require('express');
const routes = require('./api.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/drugDB');
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

//initialize routes
app.use('/api', routes);

//error handling middleware
app.use(function(err, req, res, next){
    //console.log(err);
    res.send({error: err.message})
})

app.get('/api', function(req, res){
    console.log('get');
    res.status(422).send({name: "ibuprom"});
})


app.listen(process.env.port || 8080, function(){
    console.log('listening')
})