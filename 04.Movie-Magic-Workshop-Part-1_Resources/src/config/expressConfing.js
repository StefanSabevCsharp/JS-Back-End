const express = require("express");
const {urlencoded , static: staticHandler} = require("express");
const cookieParser = require("cookie-parser");


function expressConfig(app) {
    app.use(urlencoded({ extended: true }));
    app.use("/static", staticHandler("static")); 
    app.use(cookieParser());
}

module.exports = {expressConfig};