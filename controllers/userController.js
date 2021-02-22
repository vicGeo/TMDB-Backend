const userModel = require('../models/userModel');

//Mostrar a todos los usuarios
exports.getUsers = async (req, res) => {
    try {
        const user = await userModel.find( {} );
        res.json(user);

    } catch (error) {
        console.log(error);
        res.send(error);
    }
};