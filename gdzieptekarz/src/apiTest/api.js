const express = require('express');
const Drug = require('./models/drug');

const router = express.Router();

//get list of drugs
router.get('/leki', function (req, res) {
    res.send({ type: 'GET' })
})

router.post('/leki', function (req, res, next) {
    // var drug = new Drug(req.body);
    // drug.save();
    Drug.create(req.body).then(function (drug) {
        // res.send({
        //     type: 'POST',
        //     nazwa: req.body.A,
        //     postac: req.body.B,
        //     dawka: req.body.C,
        //     opakowanie: req.body.D,
        //     producent: req.body.E
        // })
        res.send(drug);
    }).catch(next);

})

router.put('/leki/:id', function (req, res, next) {
    res.send({ type: 'PUT' })
})

router.delete('/leki/:id', function (req, res, next) {
    res.send({ type: 'DELETE' })
})

module.exports = router;