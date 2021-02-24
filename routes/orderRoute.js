const express = require('express');

const router = express.Router();

const controllerOrder = require('../controllers/orderController');

router.post('/orders', async (req, res) => {
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

router.get('/orders', async (req, res) => {
    try {
        const getOrder = await controllerOrder.indexAll();

        res.json(getOrder);

    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.delete('/orders/:id', async (req, res) => {
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
