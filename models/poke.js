const mongoose = require('mongoose')

const pokeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true }
});
const Pokemons = mongoose.model('Pokemons', pokeSchema);
module.exports = Pokemons;