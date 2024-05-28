const fs = require('fs');
const path = require('path');

async function getAllMovies() {
    let moviesPath = path.join(__dirname, "../config/database.json");
    let moviesData = fs.readFileSync(moviesPath);
    console.log(moviesData.toString());

    return JSON.parse(moviesData);
}

module.exports = {
    getAllMovies
}