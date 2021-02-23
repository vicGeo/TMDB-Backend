const express = require('express');

const router = express.Router();

const controllerOrder = require('../controllers/orderController');

router.post('/order', async (req, res) => {
    try {
        const order = await controllerOrder.store(req.body);
        const status = 'Success!';
        res.json({ status, order });

    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.get('/order', async (req, res) => {
    try {
        const getOrder = await controllerOrder.indexAll();

        res.json(getOrder);

    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.get('/order/user/:id', async (req, res) => {
    try {
        const showOrder = await controllerOrder.showOrderByUser({user: req.params.id});
        res.json(showOrder);

        } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.get('/order/:id', async (req, res) => {
    try {
        const orderId = await controllerOrder.findById(req.params.id);

        if (!orderId) {
            res.status(404).json({ message: 'El pedido no existe'});

        }
        res.json(orderId);
    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.delete('/order/:id', async (req, res) => {
    try {
        await controllerOrder.delete({_id: req.params.id});
        res.json({ message: 'El pedido ha sido eliminado'})

    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});


module.exports = router;
