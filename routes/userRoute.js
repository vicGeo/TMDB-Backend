const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

module.exports = () => {

    //Mostrar todos los usuarios
    router.get('/user', userController.getUsers);
    //Añadir usuarios
    router.post('/user', userController.addUsers);
    //Obtener usuario por ID
    router.get('/user/:id', userController.getUserById);
    //PUT Customers
    router.put('/user/:id', customerController.updateById);
    //DELETE Customers
    router.delete('/user/:id', customerController.deleteById);


    return router;
};