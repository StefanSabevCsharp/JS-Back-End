const router = require("express").Router();
const dataService = require("../services/dataService");


router.get("/:id", async (req, res) => {

    const course = await dataService.getOne(req.params.id).lean();
    console.log(course);
    res.render("details",{...course});

});

module.exports = router;
