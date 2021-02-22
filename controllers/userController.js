const userModel = require('../models/userModel');

//Mostrar a todos los usuarios
exports.getUsers = async (req, res, next) => {
    try {
        const user = await userModel.find( {} );
        res.json(user);

    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

//Añadir usuarios
exports.addUsers = async (req, res, next) => {
    const user = new userModel(req.body);
    try {
        await user.save();
        res.json({ message: 'Nuevo usuario añadido!'});
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

//Usuario por ID
exports.getUserById = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            res.status(404).json({
                message: 'El cliente no existe'
            });
        }
        res.json(user);

    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};