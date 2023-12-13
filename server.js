const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');
const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());




app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon/', (req, res) => {
    // res.send({ pokemon: pokemon });
    res.render('Index', { pokemon: pokemon });
});


app.listen(3000, () => {
    console.log('listening');
});