const router = require('express').Router();
const homeController = require("./src/controllers/homeController");
const authController = require("./src/controllers/authController");
const detailsController = require("./src/controllers/detailsController");

router.use(homeController);
router.use("/auth",authController);
router.use("/details",detailsController);

router.get("*", (req, res) => {
    res.render("404");
});



module.exports = router;