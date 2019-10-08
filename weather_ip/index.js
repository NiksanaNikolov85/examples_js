let printMsg = function (){
    console.log('Show weather forecast');
}
printMsg();

const express = require('express');
const app = express();
const axios = require('axios');

const APPID = "4b6cc4183d2ef6e1e65f303e83f3d509";
app.get('/', function (req, res) {
    res.send('Hello again !!!!!')
})

app.get('/test', function (req, res) {
    res.send('Hello again !')
})

app.get('/posts', function (req, res) {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((result) => {
            console.log(result.data)
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result.data));
        });
})

app.get('/posts/:city', function (req, res) {
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: req.params.city ? 'sd' : 'sd',
            APPID,
        }
    }).then((result) => {
        console.log(result.data)
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result.data));
    });
});

app.listen(8080, () => {console.log('Started again')})