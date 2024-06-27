const mongoose = require('mongoose');


async function configDB() {
    await mongoose.connect('mongodb://localhost:27017/regularExam');
    console.log('Database connected');
}

module.exports = { configDB };