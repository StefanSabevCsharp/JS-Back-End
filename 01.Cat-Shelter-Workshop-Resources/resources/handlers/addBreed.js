const fs = require('fs');
const path = require('path');
const { readFile } = require('../util');


function addBreed(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    const file = fs.readFileSync(path.join(__dirname, '../views/addBreed.html'));
    res.write(file);
    res.end();

}


module.exports = {
    addBreed
}