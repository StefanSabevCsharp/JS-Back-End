const express = require("express");
const handlebars = require("express-handlebars");
const { configExpress } = require("./config/configExpress");
const { configHandlebars } = require("./config/configHandlebars");
const mongoose = require("mongoose");
const router = require("../routes");

 
const app = express();
configExpress(app);  
configHandlebars(app);

async function start() {
    await mongoose.connect("mongodb://localhost:27017/treasure").then(console.log("Connected to DB"));
    app.listen(3000, () => console.log("Server is listening on port 3000"));
};

start();