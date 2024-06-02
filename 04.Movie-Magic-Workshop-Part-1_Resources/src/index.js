const express = require("express");
const handlebars = require("express-handlebars");

const { expressConfig } = require("./config/expressConfing");
const { handlebarsConfig } = require("./config/handlebarsConfig");
const { router } = require("./routes");

const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

expressConfig(app);
handlebarsConfig(app);
app.use(router);

mongoose
    .connect("mongodb://localhost:27017/movies")
    .then(() => {
        console.log("Connected to database");
    })
    .then(() => {
        app.listen(PORT);
        console.log(`Server is listening on port ${PORT}...`);
    })
    .catch((err) => {
        console.log("Connection failed");
        console.log(err);
    });
