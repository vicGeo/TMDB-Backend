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