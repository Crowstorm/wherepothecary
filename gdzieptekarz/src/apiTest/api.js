const express = require('express');
const Drug = require('./models/drug');

const router = express.Router();

//get list of drugs
router.get('/leki', function (req, res) {
    //pobierz wszystkie leki w api
    Drug.find({}).then(function(drugs){
        //res.send(drugs);
        res.json({data: drugs})
    })

    
   // res.send({ type: 'GET' })
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
        res.json({data: drug})
    }).catch(next);

})

router.put('/leki/:id', function (req, res, next) {
    Drug.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Drug.findOne({ _id: req.params.id }).then(function (drug) {
            res.json({data: drug})
        })
    })
    //res.send({ type: 'PUT' })
})

router.delete('/leki/:id', function (req, res, next) {
    //console.log(req.params.id);
    Drug.findByIdAndRemove({ _id: req.params.id }).then(function (drug) {
        res.send({ type: drug })
    });
    // res.send({ type: 'DELETE' })
})

module.exports = router;

// {
//     "A": "BEAUTY&YOUTHFORTE A+E",
//     "B": "KAPS.",
//     "C": "",
//     "D": "30 KAPS.",
//     "E": "STARPHARMA"
//   }
