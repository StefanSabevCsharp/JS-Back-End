const mongoose = require('mongoose');


async function configDB() {
    //TO DO : change the connection string
    await mongoose.connect('mongodb://localhost:27017/ExamPrep');
    console.log('Database connected');
}

module.exports = { configDB };