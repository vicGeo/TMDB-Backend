const Order = require('../models/orderModel');

class OrderController {

    constructor() {

    }

    async indexAll() {
        return Order.find({})
        .populate('user')
        .populate({
            path: 'movies.movie',
            model: 'Movies'
        });
    }

    async store(order) {
        return Order.create(order);
    }


    async delete(id) {
        return Order.findByIdAndDelete(id);
    }

};

let orderController = new OrderController();
module.exports = orderController;
