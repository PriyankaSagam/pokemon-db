require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const pokemon = require('./models/pokemon.js');
const Pokemons = require('./models/poke.js');
const jsxViewEngine = require('jsx-view-engine');

//Global configuration
const mongoURI = process.env.Mongo_URI;
const db = mongoose.connection;

//connect to Mongo
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to Mongo')
})

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());






app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

//Index
app.get('/pokemon', async(req, res) => {
    // res.send({ pokemon: pokemon });
    //res.render('Index', { pokemon: pokemon });
    try {
        const foundAllPokemon = await Pokemons.find({}) 
         res.status(200).render('Index', {pokemon: foundAllPokemon});
 
     } catch (err) {
         res.status(400).send(err);
     }
    }
);

// NEW 

app.get('pokemon/new', (req, res) => {
    res.render('New');
});


//Show
app.get('/pokemon/:id', async(req, res) => {
     //res.send(pokemon[req.params.id]);
     res.render('Show', { poke: pokemon[req.params.id] } )
  

})

// // S - SHOW - show route displays details of an individual fruit
// app.get('/fruits/:id', async (req, res) => {
    
//     // res.send(fruits[req.params.indexOfFruitsArray]);
//     try { 
//         const foundFruit = await Fruit.findById(req.params.id)
//         res.render('Show',{fruit:foundFruit})
//     } catch (err) {
//         res.status(400).send(err);
//     }
   
// })

app.listen(3000, () => {
    console.log('listening');
});