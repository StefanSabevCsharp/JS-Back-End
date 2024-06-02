const { createMovie } = require("../service/Movie");

const fs = require('fs');
const path = require('path');

module.exports = {
    createControllerGet:  (req, res) => {
        res.render('create');
    },
    createControllerPost: (req, res) => {
        let newObj = req.body;
        let newMovie = createMovie(newObj);
       
        let dbPath = path.join(__dirname, '../config/database.json');
        fs.readFile(dbPath, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            let db = JSON.parse(data);
            db.push(newMovie);
            fs.writeFile(dbPath, JSON.stringify(db), (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                res.redirect('/');
            });
        });

    },
};
