const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
// Register Handlebars view engine
app.engine('handlebars', exphbs());
// Use Handlebars view engine
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/weather', (req, res) => {
    res.render('weather', { current: 'jyjyjg '});
});

app.listen(3000, () => {console.log('Started again')})
