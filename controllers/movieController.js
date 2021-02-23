const Movie = require('../models/movieModel');

class MovieController {

    constructor() {

    }

    async indexAll() {
        return Movie.find().limit(20);
    }

    async findById(id) {
        return Movie.findById(id);
    }
    async findByName(movie) {
        return Movie.find(movie);
    }

    async store(movie) {
        return Movie.create(movie);
    }

    async update(id, movie) {
        return Movie.findByIdAndUpdate(id, movie);
    }

    async delete(id) {
        return Movie.findByIdAndDelete(id);
    }

};

let movieController = new MovieController();
module.exports = movieController;