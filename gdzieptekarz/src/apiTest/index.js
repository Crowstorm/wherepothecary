const express = require('express');
const routes = require('./api.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//initialize routes
app.use('/api', routes);

app.get('/api', function(req, res){
    console.log('get');
    res.send({name: "ibuprom"});
})


app.listen(process.env.port || 8080, function(){
    console.log('listening')
})