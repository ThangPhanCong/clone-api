const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/product',  { useNewUrlParser: true } );

app.get('/', (req, res) => res.send('Hello World!'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', require('./api'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));