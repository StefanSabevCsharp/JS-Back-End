const url = require("url");
const fs = require("fs");
const path = require("path");

const cats = require("../data/cats.json");
const { readFile, readTemplate } = require("../util");
const { createCat } = require("./cats");


const homeView =  async (req, res) => {
    const template =  await readTemplate("home/index")

    res.writeHead(200, {
        "Content-Type": "text/html",
    });
    let html = template.replace(`%%cats%%`, cats.map(createCat).join("\n"));
    res.write(html);
    res.end();

}
module.exports = {
    homeView
};



// const homeView = (req, res) => {
//     const pathName = url.parse(req.url).pathname;
//     if (pathName === "/" && req.method === "GET") {
//         const filePath = path.normalize(
//             path.join(__dirname, "../views/home/index.html")
//         );
//         const index = fs.createReadStream(filePath);
//         if (!index) {
//             res.writeHead(404, {
//                 "Content-Type": "text/plain",
//             });
//             res.write("404 Not Found");
//             res.end();
            
//         } else {
//             res.writeHead(200, {
//                 "Content-Type": "text/html",
//             });
//             index.pipe(res);
//             index.on("error", (err) => {
//                 console.log(err);
//             });
//             index.on("end", () => {
//                 res.end();
//             });
//         }
//         return false;
//     } else {
//         return true;
//     }
// };

// module.exports = {
//     homeView
// };


