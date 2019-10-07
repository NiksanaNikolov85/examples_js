const express = require('express');
const axios = require('axios');

const app = express();

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

app.listen(3000, () => {console.log('Started again')})
