const User = require('../models/userModel');

//Mostrar a todos los usuarios
exports.getUsers = async (req, res, next) => {
    try {
        const user = await User.find( {} );
        res.json(user);

    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

//Añadir usuarios
exports.addUsers = async (req, res, next) => {
    const user = new User(req.body);
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
        const user = await User.findById(req.params.id);
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

//Update user
exports.updateById = async (req, res, next) => {
    try {
        const userId = await User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.status(201).json({
            message: 'Usuario actualizado correctamente'
        });

    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
};

//Delete user

exports.deleteById = async (req, res, next) => {
    try {
        await User.findOneAndDelete({ _id: req.body.id});
        res.json({
            message: 'Usario eliminado correctamente'
        });

    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};