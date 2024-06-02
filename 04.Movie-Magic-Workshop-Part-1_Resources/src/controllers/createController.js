// const { createMovie } = require("../service/Movie");
const Movie = require("../models/Movie");

// const fs = require('fs');
// const path = require('path');

module.exports = {
    createControllerGet:  (req, res) => {
        res.render('create');
    },
    createControllerPost: async (req, res) => {

        try {
            const result = await Movie.create(req.body);
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.status(400).end();
            return;
        }

        // let newObj = req.body;
        // let newMovie = createMovie(newObj);
       
        // let dbPath = path.join(__dirname, '../config/database.json');
        // fs.readFile(dbPath, 'utf-8', (err, data) => {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }
        //     let db = JSON.parse(data);
        //     db.push(newMovie);
        //     fs.writeFile(dbPath, JSON.stringify(db), (err) => {
        //         if (err) {
        //             console.log(err);
        //             return;
        //         }
        //         res.redirect('/');
        //     });
        // });

    },
};
