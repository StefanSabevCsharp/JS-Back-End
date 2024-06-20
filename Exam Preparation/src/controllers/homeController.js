const router = require("express").Router();
const dataService = require("../services/dataService");
const Course = require("../models/Course");
const { isAuth, isOwner } = require("../middlewears/authMiddlewear");
const userService = require("../services/userService");

router.get("/", async (req, res) => {
    const lastCourses = await dataService.getLastThree().lean();

    res.render("home", { lastCourses });
});

router.get("/courses", async (req, res) => {
    const courses = await dataService.getAllData().lean();
    res.render("catalog", { courses });
});

router.get("/create", isAuth, (req, res) => {
    res.render("create");
});

router.post("/create", isAuth, async (req, res) => {
    try {
        await dataService.create(req, res);
        res.redirect("/courses");
    } catch (err) {
        res.render("create", { error: err.message, ...req.body });
    }
});
router.get("/profile", isAuth, async (req, res) => {
    const currentUser = await userService
        .getOne(req.user._id)
        .populate("createdCourses")
        .lean();

    res.render("profile", {
        ...currentUser,
        createdCourses: currentUser.createdCourses,
    });
});

router.get("/edit/:id", isAuth, async (req, res) => {
    const course = await dataService.getOne(req.params.id).lean();
    res.render("edit", { ...course });
});

router.post("/edit/:id", isAuth, isOwner, async (req, res) => {
    try {
        await dataService.edit(req, res);
        res.redirect("/courses");
    } catch (err) {
        res.render("edit", { error: err.message, ...req.body });
    }
});

router.get("/delete/:id", isAuth, isOwner, async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    res.redirect("/courses");
});

router.get("/subscribe/:id", isAuth, async (req, res) => {
    console.log(req.params.id, req.user._id);
    try {
        console.log(req.params.id, req.user._id);
        await userService.subscribe(req.params.id, req.user._id);
        res.redirect(`/details/${req.params.id}`);
    } catch (err) {
        console.log(err);
        res.render("404");
    }
});

module.exports = router;
