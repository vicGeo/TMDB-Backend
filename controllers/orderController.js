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

    async findById(id) {
        return Order.findById(id)
        .populate('user')
        .populate({
            path: 'movies.movie',
            model: 'Movies'
        });
    }

    async delete(id) {
        return Order.findOneAndDelete(id);
    }

    async showOrderByUser() {
        return Order.find({})
        .populate('user')
        .populate({
            path: 'movies.movie',
            model: 'Movies'
        });
    }
};

let orderController = new OrderController();
module.exports = orderController;
