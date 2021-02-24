const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'secretword';

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

    async login(email, password) {
        const user = await User.findOne({ email });
        if(!user) {
            throw new Error('email nor exists');
        }
        const match = await bcrypt.compare(password, user.password);

        if(!match) {
            throw new Error('password incorrect');
        }
        const data = {
            userId: user.id,
            tokenCreationDate: new Date
        }

        return jwt.sign(data, secret)
    }
};

let userController = new UserController();
module.exports = userController;