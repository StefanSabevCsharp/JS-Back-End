const { getAllMovies } = require("../service/movieService");

module.exports = {
    homeController: async (req, res) => {
        const movies = await getAllMovies();
        console.log(movies);
        
        res.render("home", { movies });
    },
};
