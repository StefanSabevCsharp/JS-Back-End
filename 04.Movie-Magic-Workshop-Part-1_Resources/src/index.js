const express = require("express");
const handlebars = require("express-handlebars");
const { expressConfig } = require("./config/expressConfing");
const { handlebarsConfig } = require("./config/handlebarsConfig");
const { router } = require("./routes");


const PORT = 3000;
 

const app = express();

expressConfig(app);
handlebarsConfig(app);
app.use(router)


app.listen(PORT);
