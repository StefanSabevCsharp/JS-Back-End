const router = require("express").Router();
const dataService = require("../services/dataService");
const userService = require("../services/userService");

router.get("/:id", async (req, res) => {
    // const course = await dataService
    //     .getOne(req.params.id)
    //     .populate("owner")
    //     .lean();
        
    // const currentUser = await userService.getOne(req.user._id).lean();
    // const isSubsribed = course.signUpList.includes(currentUser._id);
    // console.log(course.signUpList); 

    // const owner = await userService.getOne(course.owner._id).lean();
    // const isOwner = course.owner._id == req.user._id; 
    // const allSignUps = course.signUpList.map(x => x.email).join(", ").trim();

    // res.render("details", { ...course, isOwner,isSubsribed ,owner, allSignUps});

    //TO DO : FIX THE CODE BELOW TO Work corectly.currently not passing the data to the view
    try {
        const course = await dataService
            .getOne(req.params.id)
            .populate("owner")
            .lean();

        let isSubscribed = false;
        let isOwner = false;
        let owner = null;
        let allSignUps = "";

        if (req.user) {
            const currentUser = await userService.getOne(req.user._id).lean();
            isSubscribed = course.signUpList.includes(currentUser._id);
            isOwner = course.owner._id.equals(req.user._id);
        }

        owner = await userService.getOne(course.owner._id).lean();
        allSignUps = course.signUpList.map(x => x.email).join(", ").trim();

        res.render("details", { 
            ...course, 
            isOwner, 
            isSubscribed, 
            owner, 
            allSignUps 
        });
    } catch (err) {
        res.render("404", { error: err.message });
    }
});

module.exports = router;
