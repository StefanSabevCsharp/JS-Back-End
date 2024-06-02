const { getMovieById } = require("../service/movieService");

module.exports = {
    detailsController: async (req, res) => {
        let id = req.params._id;
        console.log(`in detailsController: ${id}`);
        let movie = await getMovieById(id);
        console.log(`in detailsController: ${movie} ${id}`);

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
