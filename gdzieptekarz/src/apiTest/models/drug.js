const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create drug schema and model
const drugSchema = new Schema({
    A: {type: String, required: [true, 'Podaj nazwę leku']}, //NAZWA
    B: {type: String}, // POSTAC
    C: {type: String}, //DAWKA
    D: {type: String}, //OPAKOWANIE
    E: {type: String}, //PRODUCENT
    price: {type: Number},
    lat: {type: Number},
    lon: {type: Number}
    //byc moze dodaj bool dostepnosc i bool zmodyfikowany (zeby apteka nie dostawala ciagle tego samego po dodaniu ceny)
});

const Drug = mongoose.model("drug", drugSchema);

module.exports = Drug;