const express = require('express')
const app = express();
require('dotenv').config();
const hbs = require('hbs');

const PORT = process.env.PORT;

// Servir contenido estatuco
app.use(express.static('public'));

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render(`home`, {
        nombre: 'Dila',
        titulo: 'hola'
    });
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hello World')
})

app.get('/generic', (req, res) => {
    res.render(`generic`);
})

app.get('/elements', (req, res) => {
    res.render(`elements`);
})

app.get('*', (req, res) => {
    res.send('404 | Page Not Found')
})
app.listen(PORT, () => console.log(`Running on port ${PORT}`));