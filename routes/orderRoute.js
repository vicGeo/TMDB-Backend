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


module.exports = router;
