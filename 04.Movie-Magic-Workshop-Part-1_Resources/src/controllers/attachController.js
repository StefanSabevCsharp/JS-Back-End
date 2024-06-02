const { getAllCasts } = require("../service/castService");
const { getMovieById } = require("../service/movieService");


module.exports = {
    attachCastController: async (req, res) => {
        let id = req.params._id;
        let movie = await getMovieById(id);
        const allCast = await getAllCasts();

        //TO DO : remove already added casts 

        if(!movie){
            res.render("404"); 
            return;
        }

        res.render("attach", { ...movie, allCast});
    },
}

