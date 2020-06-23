const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')

const puerto = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs'); //establecer el motor que va a renderizar mi pagina en este caso el Handlebars




app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'KeVin rAmiRez',
        pagina: 'Home'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        pagina: 'About'
    });
});

/*
app.get('/', function(req, res) {
    let content = {
        nombre: 'Kevin',
        edad: 22,
        url: req.url
    }
    console.log(content);
    res.send(content);
    //res.send('Hello World')
});
app.get('/about', function(req, res) {
    res.send('sitiocon con express')
});
*/
app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`);
});