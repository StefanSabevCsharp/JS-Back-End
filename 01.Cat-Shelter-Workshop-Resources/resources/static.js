const { readFile } = require("./util");
const fs = require("fs");

function staticFileHandler(req, res) {
 
    
    if(req.url.endsWith(".css")){
        const data = readFile(req.url);
        res.writeHead(200, {
            "Content-Type": "text/css",
        });
        res.write(data);
        res.end();
    }else if(req.url.endsWith(".js")){
        const data = readFile(req.url);
        res.writeHead(200, {
            "Content-Type": "application/javascript",
        });
        res.write(data);
        res.end();
    }else if(req.url.endsWith(".png")){
        const data = readFile(req.url);
        res.writeHead(200, {
            "Content-Type": "image/png",
        });
        res.write(data);
        res.end();
    }else if(req.url.endsWith(".jpg")){
        const data = readFile(req.url);
        res.writeHead(200, {
            "Content-Type": "image/jpg",
        });
        res.write(data);
        res.end();
    }else if(req.url.endsWith(".html")){
        const data = readFile(req.url);
        res.writeHead(200, {
            "Content-Type": "text/html",
        });
        res.write(data);
        res.end();
    }
    return true;
}

module.exports = {
    staticFileHandler
};