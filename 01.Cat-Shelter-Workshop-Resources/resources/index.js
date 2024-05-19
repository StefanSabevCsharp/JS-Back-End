const http = require('http');
const port = 4000;
const handlers = require("./handlers/viewHandler");
const fs = require("fs");
const path = require("path");
const { homeView } = require('./handlers/homeView');

let routes = {
    "/": homeView,
    "/index.html": homeView,

}

const server = http.createServer((req, res) => {
   
    // for (let handler of handlers) {
    //     if (!handler(req, res)) {
    //         break;
    //     }
    // }    
    const route = routes[req.url];

    if(typeof route === 'function'){
        route(req, res);
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write("404 Not Found");
        res.end();
    }

}).listen(port);