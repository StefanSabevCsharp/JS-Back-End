// const fs = require("fs");
// const path = require("path");
const Movie = require("../models/Movie");

async function getAllMovies() {
    try {
        let movies = Movie.find().lean();
        return movies;
    } catch (error) {
        console.log(error);
        return [];
    }

    // let moviesPath = path.join(__dirname, "../config/database.json");
    // let moviesData = fs.readFileSync(moviesPath);

    // return JSON.parse(moviesData);
}

async function getMovieById(id) {
    try {
        let movie = Movie.findById(id).lean();
        return movie;
    }catch (error) {
        console.log(error);
        return null;
    }
    // let movies = await getAllMovies();
    // let movie = movies.find((x) => x.id == id);
    // return movie;
}

module.exports = {
    getAllMovies,
    getMovieById,
};
