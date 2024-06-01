const fs = require("fs");
const path = require("path");



async function getAllMovies() {
    let moviesPath = path.join(__dirname, "../config/database.json");
    let moviesData = fs.readFileSync(moviesPath);

    return JSON.parse(moviesData);
}

async function getMovieById(id) {
    let movies = await getAllMovies();
    let movie = movies.find((x) => x.id == id);
    return movie;
}

module.exports = {
    getAllMovies,
    getMovieById,
};
