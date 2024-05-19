const { readFile } = require("./util");

function staticFileHandler(req, res) {
    if (req.url.endsWith(".css")) {
        fileHandler(req.url, res, "text/css");
        return true;
    } else if (req.url.endsWith(".js")) {
        fileHandler(req.url, res, "text/javascript");
        return true;
    } else if (req.url.endsWith(".png")) {
        fileHandler(req.url, res, "image/png");
        return true;
    } else if (req.url.endsWith(".jpg")) {
        fileHandler(req.url, res, "image/jpg");
        return true;
    } else if (req.url.endsWith(".html")) {
        fileHandler(req.url, res, "text/html");
        return true;
    }
    return false;
}

async function fileHandler(path, res, contentType) {
    const data = await readFile(path);
    res.writeHead(200, {
        "Content-Type": contentType,
    });
    data.pipe(res);
}

module.exports = {
    staticFileHandler,
};
