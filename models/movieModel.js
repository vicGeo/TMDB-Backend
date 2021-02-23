const mongoose = require('mongoose');

//Definimos el schema de las peliculas
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: {
        type: String,
        trim: true,
        required: true
    },
    release_date: {
        type: Number,

    },
    overview: {
        type: String,
    }

});

module.exports = mongoose.model('Movies', movieSchema);