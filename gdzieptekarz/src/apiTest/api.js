const express = require('express');
const router = express.Router();


//get list of drugs
router.get('/leki', function(req, res){
    res.send({type:'GET'})
})

router.post('/leki', function(req, res){
    console.log(req.body);
    res.send({
        type:'POST',
        name: req.body.A
    })
})

router.put('/leki/:id', function(req, res){
    res.send({type:'PUT'})
})

router.delete('/leki/:id', function(req, res){
    res.send({type:'DELETE'})
})

module.exports = router;