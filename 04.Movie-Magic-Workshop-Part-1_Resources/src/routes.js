const {Router} = require('express');
const { homeController } = require('./controllers/homeController');
const { createControllerGet , createControllerPost } = require('./controllers/createController');
const {detailsController} = require('./controllers/detailsController');
const {searchController} = require('./controllers/searchController');
const {aboutController} = require('./controllers/aboutController');
const { createCastGet, createCastPost } = require('./controllers/castController');

const router = Router();


router.get("/",homeController);
router.get("/create",createControllerGet);
router.post("/create",createControllerPost);
router.get("/details/:_id",detailsController);
router.get("/search",searchController);
router.get("/about",aboutController);
router.post("/search",searchController);
router.get("/cast",createCastGet);
router.post("/cast",createCastPost);



router.get("*",(req,res)=>{
    res.render("404")
})
module.exports = {router};