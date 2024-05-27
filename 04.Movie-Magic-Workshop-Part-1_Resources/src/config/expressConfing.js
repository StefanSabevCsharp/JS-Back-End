const express = require("express");
const {urlencoded , static: staticHandler} = require("express");


function expressConfig(app) {
    app.use(urlencoded({ extended: true }));
    app.use("/static", staticHandler("static")); 
}

module.exports = {expressConfig};