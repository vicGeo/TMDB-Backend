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

    async findById(id) {
        return Order.findById(id);
    }
    async findByName(order) {
        return Order.find(order);
    }

    async store(order) {
        return Order.create(order);
    }

    async update(id, order) {
        return Order.findByIdAndUpdate(id, order);
    }

    async delete(id) {
        return Order.findByIdAndDelete(id);
    }

};

let orderController = new OrderController();
module.exports = orderController;
