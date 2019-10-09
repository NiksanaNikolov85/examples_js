const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const axios = require('axios');

const app = express();
// Register Handlebars view engine
app.engine('handlebars', exphbs());
// Use Handlebars view engine
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

const APPID = "4b6cc4183d2ef6e1e65f303e83f3d509";

app.get('/', (req, res) => {
    const data = {
        town : 'Haskovo',
        population: 50000,
    };
    
    res.render('index', data);
});

app.get('/current/:city', (req, res) => {
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: req.params.city,
            APPID,
            units: 'metric',
        }
    }).then((result) => {
        console.log(result.data)
        res.setHeader('Content-Type', 'text/html');
        const { main } =  result.data;

        // res.end(JSON.stringify(result.data));
        res.render('current', { measurements: main });
    });
});

app.get('/weather/:city', (req, res) => {
    const data = {
        city: req.params.city,
        current: 'sunny',
        temp: 18,
        tommorow: {
            temp: 22,
            state: 'cloudy',
        },
    };
    
    res.render('weather', data);
});



app.get('/weather', (req, res) => {
    res.render('weather', { current: 'jyjyjgsss '});
});

app.listen(3000, () => {console.log('Started again')})

