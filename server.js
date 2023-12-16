require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const pokemon = require('./models/pokemon.js');
const Pokemons = require('./models/poke.js');
const jsxViewEngine = require('jsx-view-engine');
const methodOverride = require('method-override');

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


// ================ Middleware ================
//
app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next();
})

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

 app.use(methodOverride('_method'));




app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

//Index
app.get('/pokemon',async (req, res) => {
    // res.send({ pokemon: pokemon });
    // res.render('Index', { pokemon: pokemon });
    try {
        const foundPokemon = await Pokemons.find({}) 
         res.status(200).render('Index', {pokemon: foundPokemon});
 
     } catch (err) {
         res.status(400).send(err);
     }
    }
);

// NEW 

app.get('/new', (req, res) => {
    res.render('New');
});

//D - DELETE - PERMANENTLY removes a fruit from the db
app.delete('/pokemon/:id', async (req, res)=> {
    // res.send('deleting...');
    try{
        const deletedPoke = await Pokemons.findByIdAndDelete(req.params.id);
        console.log(deletedPoke)
        res.status(200).redirect('/pokemon');
    } catch (err) {
        res.status(400).send(err);
    }

})

//U - UPDATE - makes the actual changes to the database
app.put('/pokemon/:id', async (req, res) => {
    try {
        const updatedPoke = await Pokemons.findByIdAndUpdate(
            req.params.id,
            req.body,
           { new: true },
        )
        console.log(updatedPoke);
        res.status(200).redirect(`/pokemon/${req.params.id}`);
    } catch (err) {
    res.status(400).send(err)
}})

// C - CREATE - update our data store
app.post('/pokemon', async (req, res) => {
    try {
        const createdPoke = await Pokemons.create(req.body);
        res.status(200).redirect('/pokemon');
    } catch (err) {
        res.status(400).send(err);
    }
    // pokemon.push(req.body);
    // console.log(pokemon);
    // console.log(req.body)
    //  res.send('data received');
    // res.redirect('/pokemon'); // send user back to /pokemon
})

//E Edit - allows user to provide inputs to change the pokemon
app.get('/pokemon/:id/edit', async (req, res) => {
    try {
        const foundPokemon = await Pokemons.findById(req.params.id);
        res.status(200).render('Edit', {poke: foundPokemon});
    } catch (err) {
        res.status(400).send(err)
    }
})


//Show
app.get('/pokemon/:id', async(req, res) => {
     //res.send(pokemon[req.params.id]);
    // res.render('Show', { poke: pokemon[req.params.id] } )
    try {
        const foundPoke = await Pokemons.findById(req.params.id)
        res.render('Show', { poke : foundPoke });
    } catch (err) {
        res.status(400).send(err);
    }
  

})

//Port

app.listen(3000, () => {
    console.log('listening');
});