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
    router.put('/user/:id', userController.updateById);
    //DELETE Customers
    router.delete('/user/:id', userController.deleteById);


    return router;
};