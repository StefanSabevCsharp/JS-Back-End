const { getAllMovies } = require("../service/movieService");

module.exports = {
    homeController: async (req, res) => {
        const movies = await getAllMovies().lean();
        res.render("home", { movies });
    },
};
