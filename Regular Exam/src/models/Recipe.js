
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [2, 'Title must be at least 2 characters long']
    },
    ingredients: {
        type: String,
        required: [true, 'Ingredients are required'],
        minlength: [10, 'Ingredients should be between 10 and 200 characters long'],
        maxlength: [200, 'Ingredients should be between 10 and 200 characters long']
    },
    instructions: {
        type: String,
        required: [true, 'Instructions are required'],
        //Instuctions should be at least 10 characters long
        minlength: [10, 'Instuctions should be at least 10 characters long']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [10, 'Description should be between 10 and 100 characters long'],
        maxlength: [100, 'Description should be between 10 and 100 characters long']
    },
    image: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'Image should start with http:// or https://']
    },
    recommendList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
}, {timestamps: true});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;