const http = require("http");
const port = 4000;
const handlers = require("./handlers/viewHandler");
const fs = require("fs");
const path = require("path");
const { homeView } = require("./handlers/homeView");
const { staticFileHandler } = require("./static");
const { addBreed } = require("./handlers/addBreed");
const { addCat } = require("./handlers/addCat");

let routes = {
    "/": homeView,
    "/index.html": homeView,
    "/cats/add-breed": addBreed,
    "/cats/add-cat": addCat,
};

const server = http
    .createServer((req, res) => {
        
        const route = routes[req.url];

        if (typeof route === "function") {
            route(req, res);
            return;
        } else if (staticFileHandler(req, res)) {
            return;
        }

        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("404 Not Found");
        res.end();
    })
    .listen(port);
