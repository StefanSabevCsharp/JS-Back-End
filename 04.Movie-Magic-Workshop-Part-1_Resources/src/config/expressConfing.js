const express = require("express");
const {urlencoded , static: staticHandler} = require("express");
const cookieParser = require("cookie-parser");
const isAuthorize = require("../../middlewears/authorization");
const secterPass = "mySecret";


function expressConfig(app) {
    app.use(urlencoded({ extended: true }));
    app.use("/static", staticHandler("static")); 
    app.use(cookieParser());
    // app.use(isAuthorize);
}

module.exports = {expressConfig, secterPass};
