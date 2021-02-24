const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routerUser = require('./routes/userRoute');
const routerMovie = require('./routes/movieRoute');
const routerOrder = require('./routes/orderRoute');

const app = express();

//Conexión
mongoose.connect('mongodb+srv://geek:0Aodcwsdn7FiYIjy@geekshubs.a8rp0.mongodb.net/moviedatabase',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
);

//Habilitar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Habilitar cors
app.use(cors());

app.use(routerOrder);
app.use(routerUser);
app.use(routerMovie);

app.get('/', (req, res) => {
    res.send('API REST para testear con POSTMAN :)');
});

app.listen(5000, () => {
    console.log('Server on!');
});