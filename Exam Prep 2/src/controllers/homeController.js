const router = require("express").Router();
const userService = require("../services/authService");
const dataService = require("../services/dataService");
const { getErrorMessage } = require("../utils/errorParser");

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/dashboard", (req, res) => {
    res.render("dashboard");
});
router.get("/search", (req, res) => {
    res.render("search");
});
router.get("/create", (req, res) => {
    res.render("create");
});
router.post("/create", async (req, res) => {
    const stoneData = req.body;

    try {
        await dataService.CreateStone(stoneData, req.user._id);
        res.redirect("/dashboard");
    } catch (err) {
        console.log(err);
        res.render("create", {
            error: getErrorMessage(err),
            stoneData,
            ...stoneData,
        });
    }
});

module.exports = router;
