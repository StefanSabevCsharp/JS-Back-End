
const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("../../routes");
const {authMiddlewear} = require ("../middlewears/authMiddlewear");

function configExpress(app) {

    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser()); 
    app.use(authMiddlewear);
    app.use(router)
    
}

module.exports = { configExpress};
