
const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("../../routes");

function configExpress(app) {

    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
    app.use(router)
    app.use(cookieParser());
    
}

module.exports = { configExpress};
