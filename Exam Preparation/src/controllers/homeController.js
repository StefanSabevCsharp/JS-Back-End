const router = require("express").Router();
const dataService = require("../services/dataService");

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/courses", async (req, res) => {
    //TO DO : finish populate data in hbs. check if i get data from db
    
    const courses = await dataService.getAllData().lean();
    res.render("catalog", { courses });
});

router.get("/create", (req, res) => {
    res.render("create");
});

router.post("/create", async (req, res) => {
    try {
        await dataService.create(req, res);
        res.redirect("/courses");
    } catch (err) {
        res.render("create", { error: err.message, ...req.body });
    }
});

module.exports = router;
