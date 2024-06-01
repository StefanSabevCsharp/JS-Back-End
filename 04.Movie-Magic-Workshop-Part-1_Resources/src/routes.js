const {Router} = require('express');
const { homeController } = require('./controllers/homeController');
const { createControllerGet } = require('./controllers/createController');
const {detailsController} = require('./controllers/detailsController');

const router = Router();


router.get("/",homeController);
router.get("/create",createControllerGet);
router.get("/details/:id",detailsController)
module.exports = {router};