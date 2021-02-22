const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

module.exports = () => {

    //GET users
    router.get('/user', userController.getUsers);

    return router;
};