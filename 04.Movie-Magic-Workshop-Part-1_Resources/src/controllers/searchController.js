const { getAllMovies } = require("../service/movieService");

module.exports = {
    searchController: async (req, res) => {
        const { search, genre, year } = req.body;
        const movies =  await getAllMovies().lean();
        //have to all validation if there is no movies
          
        const filteredMovies = movies.filter((x) => {
            let result = true;
            if (search) {
                result = x.title.toLowerCase().includes(search.toLowerCase());
            }
            if (result && genre) {
                result = x.genre.toLowerCase().includes(genre.toLowerCase());
            }
            if (result && year) {
                result = x.year == year;
            }
            return result;
        });
       
        res.render('search',{filteredMovies});
    }
}