const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2030,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    description: {
        type: String,
        required: true,
        maxlength: 1000,
    },
    imageURL: {
        type: String,
        required: true,
        // validator: function (value) {
        //     return value.startsWith("http") || value.startsWith("https");
        // },
        validator: function (value) {
            return value.match(/^http(s)?:\/\//);
        },
    },
    cast:[{
        type: mongoose.Types.ObjectId,
        ref: "Cast",
    }]
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports =  Movie ;
