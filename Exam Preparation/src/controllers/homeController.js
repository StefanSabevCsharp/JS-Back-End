const router = require("express").Router();
const dataService = require("../services/dataService");
const Course = require("../models/Course");
const {isAuth} = require("../middlewears/authMiddlewear");
const userService = require("../services/userService");

router.get("/", async (req, res) => {
    const lastCourses = await dataService.getLastThree().lean();

    res.render("home", { lastCourses });
});

router.get("/courses", async (req, res) => {

    const courses = await dataService.getAllData().lean();
    res.render("catalog", { courses });
});

router.get("/create",isAuth, (req, res) => {
    res.render("create");
});

router.post("/create",isAuth, async (req, res) => {
    try {
        await dataService.create(req, res);
        res.redirect("/courses");
    } catch (err) {
        res.render("create", { error: err.message, ...req.body });
    }
});
router.get("/profile",isAuth, async (req, res) => {
    const currentUser = await userService.getOne(req.user._id).lean();

    res.render("profile", { ...currentUser });
});
module.exports = router;
