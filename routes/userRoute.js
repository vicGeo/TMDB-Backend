const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

module.exports = () => {

    //Mostrar todos los usuarios
    router.get('/user', userController.getUsers);
    //Añadir usuarios
    router.post('/user', userController.addUsers);
    return router;
};