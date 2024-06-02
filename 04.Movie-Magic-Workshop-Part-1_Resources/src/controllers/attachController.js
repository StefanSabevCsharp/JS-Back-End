const { getMovieById } = require("../service/movieService");


module.exports = {
    attachCastController: async (req, res) => {
        let id = req.params._id;
        let movie = await getMovieById(id);

        if(!movie){
            res.render("404"); 
            return;
        }

        res.render("attach", { ...movie });
    },
}

