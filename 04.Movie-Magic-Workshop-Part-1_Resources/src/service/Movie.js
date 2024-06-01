const { idCreator } = require("../utils/idCreator");

class Movie {
    id;
    title;
    genre;
    director;
    year;
    imageURL;
    rating;
    description;
    constructor(id,title,genre,director,year,imageURL,rating,description){
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.director = director;
        this.year = year;
        this.imageURL = imageURL;
        this.rating = rating;
        this.description = description;
    
    }
}

function createMovie(obj){
    const movie = new Movie();
    movie.id = idCreator();
    movie.title = obj.title;
    movie.genre = obj.genre;
    movie.director = obj.director;
    movie.year = obj.year;
    movie.imageURL = obj.imageURL;
    movie.rating = obj.rating;
    movie.description = obj.description;
    return movie;
}

module.exports = {createMovie};