const router = require("express").Router();
const { isAuth, isOwner } = require("../middlewears/authMiddlewear");
const userService = require("../services/authService");
const dataService = require("../services/dataService");
const { getErrorMessage } = require("../utils/errorParser");

router.get("/", async (req, res) => {
    const lastThree = await dataService.GetLastThree().lean();

    res.render("home", { lastThree });
});

router.get("/dashboard", async (req, res) => {
    const allStones = await dataService.GetAllStones().lean();

    res.render("dashboard", { allStones });
});
router.get("/search", (req, res) => {
    res.render("search");
});
router.get("/create", isAuth, (req, res) => {
    res.render("create");
});
router.post("/create", isAuth, async (req, res) => {
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
router.get("/edit/:id", async (req, res) => {
    try {
        const stone = await dataService.GetStoneById(req.params.id).lean();
        console.log(req.params.id);
        console.log(`in edit ${stone}`);
        res.render("edit", { ...stone });
    } catch (err) {
        console.log(`error in edit ${err}`);
        res.render("edit", { error: getErrorMessage(err), stone });
    }
});

router.post("/edit/:id", async (req, res) => {
    const stoneData = req.body;
    const { name, category, color, image, location, formula, description } =
        stoneData;
    if (
        !name ||
        !category ||
        !color ||
        !image ||
        !location ||
        !formula ||
        !description
    ) {
        return res.render("edit", {
            error: "All fields are required",
            ...stoneData,
        });
    }
    try {
        await dataService.EditStone(req.params.id, stoneData);
        res.redirect("/dashboard");
    } catch (err) {
        res.render("edit", { error: getErrorMessage(err), ...stoneData });
    }
});

router.get("/delete/:id", isAuth,isOwner, async (req, res) => {
    try {
        await dataService.DeleteStone(req.params.id);
        res.redirect("/dashboard");
    } catch (err) {
        res.redirect("/404");
    }
});

router.get("/like/:id", async (req, res) => {
    try {
        await dataService.LikeStone(req.params.id, req.user._id);
        res.redirect(`/details/${req.params.id}`);
    } catch (err) {
        res.redirect("/404");
    }
});

module.exports = router;
