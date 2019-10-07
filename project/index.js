const express = require('express');
const axios = require('axios');

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world !')
})

app.get('/test', function (req, res) {
    res.send('Hello again !')
})

app.get('/user/:id', function (req, res) {
    res.send('user ' + req.params.id)
})

app.get('/posts', function (req, res) {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((result) => {
            console.log(result.data)
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result.data));
        });
})

app.get('/posts/:id', function (req, res) {
    const postId = req.params.id;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((result) => {
            console.log(result.data)
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result.data));
        });
})

app.get('/vreme/:city', function (req, res) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&APPID=4b6cc4183d2ef6e1e65f303e83f3d509`)
        .then((result) => {
            console.log(result.data)
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result.data));
        });
})

app.listen(3000, () => {console.log('Started again')})
