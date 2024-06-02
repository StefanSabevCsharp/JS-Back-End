const Cast = require("../models/Cast");

module.exports = {
    createCastGet: (req, res) => {
        res.render("cast");
    },
    createCastPost: async (req, res) => {
        const { name, age, born, imageURL } = req.body;

        try {
            await Cast.create({ name, age, born, imageURL });
            res.redirect("/");
        } catch (error) {
           console.log(error.message);
        }

    },
}