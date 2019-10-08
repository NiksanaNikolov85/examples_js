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
    axios.get('https://api.openweathermap.org/data/2.5/sdweather', {
        params: {
            q: req.params.city,
            APPID,
        }
    }).then((result) => {
        console.log(result.data)
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result.data));
    }).catch((error) => {
        const code = error.response && error.response.data && error.response.data.cod;
        const statusCode = error.response.data.cod;
        if(code ==='404'){
            res.status(statusCode).send('Something broke! There is error '+statusCode);
        }else{
            res.status(statusCode).send('Something broke which is error :' +statusCode);
        }
            console.log(error.response.data);
    });
});

app.listen(8080, () => {console.log('Started again')})