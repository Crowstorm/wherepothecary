const express = require('express');
const Drug = require('./models/drug');

const router = express.Router();

router.get('/leki', function (req, res) {
    //pobierz wszystkie leki w api
    Drug.find({}).then(function(drugs){
        res.send(drugs);
    })
})

router.post('/leki', function (req, res, next) {
    Drug.create(req.body).then(function (drug) {
        // res.send({
        //     type: 'POST',
        //     nazwa: req.body.A,
        //     postac: req.body.B,
        //     dawka: req.body.C,
        //     opakowanie: req.body.D,
        //     producent: req.body.E
        // })
        res.send(drugs);
    }).catch(next);

})

router.put('/leki/:id', function (req, res, next) {
    Drug.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Drug.findOne({ _id: req.params.id }).then(function (drug) {
            res.send(drugs);
        })
    })
})

router.delete('/leki/:id', function (req, res, next) {
    Drug.findByIdAndRemove({ _id: req.params.id }).then(function (drug) {
        res.send({ type: drug })
    });
})

module.exports = router;

// {
//     "A": "BEAUTY&YOUTHFORTE A+E",
//     "B": "KAPS.",
//     "C": "",
//     "D": "30 KAPS.",
//     "E": "STARPHARMA"
//   }
