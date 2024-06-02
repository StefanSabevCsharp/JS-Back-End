const mongoose = require('mongoose');

const CastSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 10,
        max: 120,
    },
    born: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validation: {
            validate: function (value) {
                return value.startsWith("http") || value.startsWith("https");
            }
        },
    },
    
});

const Cast = mongoose.model('Cast', CastSchema);
module.exports = Cast;
