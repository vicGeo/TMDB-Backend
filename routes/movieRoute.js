const express = require('express');

const router = express.Router();

const controllerMovie = require('../controllers/movieController');


router.get('/movie', async (req, res) => {
    try {
        res.json(await controllerMovie.indexAll());

    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.get('/movies/:id', async (req, res) => {
    try {
        const id = await controllerMovie.findById(req.params.id);
        const status = 'Success!';
        res.json({ status, id });

    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.post('/movies', async (req, res) => {
    try {
        const id = await controllerMovie.store(req.body);
        const status = 'Success!';
        res.json({ status, id });

    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.put('/movies/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await controllerMovie.update(id, req.body);
        res.status(201).json({
            message: 'Pelicula actualizada correctamente'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.delete('/movies/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const status = 'Pelicula eliminada'
        await controllerMovie.delete(id);
        res.json({ status, id });

    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});

router.get('/movies/search/:query', async (req, res) => {
    try {
        const movie = await controllerMovie.findByName( {
            title: new RegExp(req.params.query, 'i')
        });
        res.json(movie);

    } catch (error) {
        return res.status(500).json({
            message: 'Server Error'
        });
    }
});


module.exports = router;