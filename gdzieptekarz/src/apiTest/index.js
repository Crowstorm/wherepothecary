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



app.listen(process.env.port || 8080, function(){
    console.log('listening')
})