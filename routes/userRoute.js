const express = require('express');
const router = express.Router();

const controllerUser = require('../controllers/userController');


router.get('/users', async (req, res) => {
    try {
        res.json(await controllerUser.indexAll());

    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const id = await controllerUser.findById(req.params.id);
        const status = 'Success!';
        res.json({ status, id });

    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.post('/users', async (req, res) => {
    try {
        const id = await controllerUser.store(req.body);
        const status = 'Success!';
        res.json({ status, id });

    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await controllerUser.update(id, req.body);
        res.status(201).json({
            message: 'Usuario actualizado correctamente'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const status = 'Usuario eliminado'
        await controllerUser.delete(id);
        res.json({ status, id });

    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.post('/users/login', async (req, res) => {
    try {
        const {email, password} =  req.body;
        const jwt = await controllerUser.login(email, password);
        res.json({ jwt });

    } catch (error) {
        return res.status(500).json({
            message: 'error.message';
        });
    }
});


module.exports = router;