const { getMovieById } = require("../service/movieService");
const Movie = require("../../models/Movie");

module.exports = {
    detailsController: async (req, res) => {
        let id = req.params._id;
        let movie = await getMovieById(id).lean();
        // movie = movie.toObject();

        if(!movie){
            res.render("404"); 
            return;
        }
        
        let stars = "";
        for (let i = 0; i < movie.rating; i++) {
            stars += " &#x2605";
        }
        movie.stars = stars;

        res.render("details", { movie });
    },
};
