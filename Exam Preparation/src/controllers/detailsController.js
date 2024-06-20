const router = require("express").Router();
const dataService = require("../services/dataService");
const userService = require("../services/userService");

router.get("/:id", async (req, res) => {
    const course = await dataService
        .getOne(req.params.id)
        .populate("owner")
        .lean();
    const currentUser = await userService.getOne(req.user._id).lean();
    const isSubsribed = course.signUpList.includes(currentUser._id);
    console.log(course.signUpList);

    const isOwner = course.owner._id == req.user._id;

    console.log(isSubsribed);

    res.render("details", { ...course, isOwner,isSubsribed });
});

module.exports = router;
