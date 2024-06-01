const { getMovieById } = require("../service/movieService");

module.exports = {
    detailsController: async (req, res) => {
        let id = req.params.id;
        let movie = await getMovieById(id);
        if(!movie){
            res.render("404"); 
            return;
        }
        // Add stars to the movie object
        let stars = "";
        for (let i = 0; i < movie.rating; i++) {
            stars += " ★";
        }
        movie.stars = stars;

        res.render("details", { movie });
    },
};
