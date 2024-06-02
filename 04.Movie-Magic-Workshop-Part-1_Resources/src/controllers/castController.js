const Cast = require("../../models/Cast");
const { createCast } = require("../service/castService");

module.exports = {
    createCastGet: (req, res) => {
        res.render("cast");
    },
    createCastPost: async (req, res) => {
        const { name, age, born, imageURL } = req.body;

        try {
          let newcast =   await createCast(name, age, born, imageURL);
            res.redirect("/");
        } catch (error) {
           console.log(error.message);
        }

    },
}