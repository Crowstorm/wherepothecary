const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create drug schema and model
const drugSchema = new Schema({
    A: {type: String, required: [true, 'Podaj nazwę leku']}, //NAZWA
    B: {type: String}, // POSTAC
    C: {type: String}, //DAWKA
    D: {type: String}, //OPAKOWANIE
    E: {type: String} //PRODUCENT
    //byc moze coordynaty usera / apteki i dostepnosc
});

const Drug = mongoose.model("drug", drugSchema);

module.exports = Drug;