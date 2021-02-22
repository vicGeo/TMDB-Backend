const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Conexión
mongoose.connect('mongodb://localhost/moviedatabase',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//Habilitar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Habilitar cors
app.use(cors());


app.get('/', (req, res) => {
    res.send('API REST para testear con POSTMAN :)');
});

app.listen(5000, () => {
    console.log('Server on!');
});