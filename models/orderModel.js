const mongoose = require('mongoose');

//Definimos el schema de los pedidos
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    created: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    movies: [{
        movie: {
            type: Schema.Types.ObjectId,
            ref: 'Movies'
        }
    }]


});

module.exports = mongoose.model('Orders', orderSchema);