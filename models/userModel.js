const mongoose = require('mongoose');

//Definimos el schema del usuario
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        unique: true,
        required: true,
        minLength: 8,
        maxLength: 20
    }
});

module.exports = mongoose.model('Users', userSchema);