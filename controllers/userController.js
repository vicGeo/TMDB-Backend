const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {

    constructor() {

    }

    async indexAll() {
        return User.find().limit(20);
    }

    async findById(id) {
        return User.findById(id);
    }

    async store(user) {
        user.password = await bcrypt.hash(user.password, 6);
        return User.create(user);
    }

    async update(id, user) {
        return User.findByIdAndUpdate(id, user);
    }

    async delete(id) {
        return User.findByIdAndDelete(id);
    }
};

let userController = new UserController();
module.exports = userController;