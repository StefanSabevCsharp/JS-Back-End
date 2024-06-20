const { urlencoded } = require("express");
const express = require("express");
const cookieParser = require("cookie-parser");

function configExpress(app) {
    app.use(urlencoded({ extended: true }));
    app.use("/static", express.static("static"));
    app.use(cookieParser());
    
}

module.exports = { configExpress};
