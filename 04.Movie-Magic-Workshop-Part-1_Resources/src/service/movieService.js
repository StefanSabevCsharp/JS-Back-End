// const fs = require("fs");
// const path = require("path");
const Movie = require("../../models/Movie");

function getAllMovies() {
    let movies = Movie.find();
    return movies;
}

function getMovieById(id) {
    try {  
        let movie = Movie.findById(id).populate("cast");
        return movie;
    }catch (error) {
        console.log(error);
        return null;
    }
    // let movies = await getAllMovies();
    // let movie = movies.find((x) => x.id == id);
    // return movie;
}
async function updateMovie(id, movie) {
   return await Movie.findByIdAndUpdate(id, movie);
}
async function deleteMovie(id) {
    return await Movie.findByIdAndDelete(id);
}

module.exports = {
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie
};
