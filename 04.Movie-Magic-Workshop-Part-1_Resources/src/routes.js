const {Router} = require('express');
const { homeController } = require('./controllers/homeController');
const { createControllerGet } = require('./controllers/createController');
const {detailsController} = require('./controllers/detailsController');
const {searchController} = require('./controllers/searchController');

const router = Router();


router.get("/",homeController);
router.get("/create",createControllerGet);
router.get("/details/:id",detailsController);
router.get("/search",searchController);


router.get("*",(req,res)=>{
    res.render("404")
})
module.exports = {router};