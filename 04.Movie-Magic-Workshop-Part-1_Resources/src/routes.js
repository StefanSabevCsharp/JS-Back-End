const {Router} = require('express');
const { homeController } = require('./controllers/homeController');
const { createControllerGet } = require('./controllers/createController');

const router = Router();


router.get("/",homeController);
router.get("/create",createControllerGet);
module.exports = {router};