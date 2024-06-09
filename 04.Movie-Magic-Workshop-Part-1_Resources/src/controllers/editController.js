
const { getMovieById, updateMovie, deleteMovie } = require("../service/movieService");


module.exports = {
    editControllerGet: async (req, res) => {
        const id = req.params._id;
        const movie = await getMovieById(id).lean();
        res.render("edit", { movie });
    },
    editControllerPost: async (req, res) => { 
        const id = req.params._id;
        const movie = req.body;
        console.log(movie);
        const responce = await updateMovie(id, movie);
        console.log(`Responce : ${responce}`);
        res.redirect(`/details/${id}`); 

        
    },
    deleteMovie: async (req, res) => { 
        const id = req.params._id;
        console.log(`Id : ${id}`);
        const responce = await deleteMovie(id);
        res.redirect("/");
    },

}