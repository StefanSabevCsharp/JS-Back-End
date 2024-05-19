
const fs = require('fs');
const path = require('path');
const {readFile} = require("../util");

function addCat(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    const file = fs.readFileSync(path.join(__dirname, '../views/addCat.html'));
    res.write(file);
    res.end();
}

module.exports = {
    addCat
}