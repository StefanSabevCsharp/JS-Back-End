const handlebars = require("express-handlebars");

function handlebarsConfig(app) {
    const hbs = handlebars.create({
        extname: ".hbs"
    });
    app.engine("hbs", hbs.engine);
    app.set("view engine", "hbs");
}

module.exports = {handlebarsConfig};