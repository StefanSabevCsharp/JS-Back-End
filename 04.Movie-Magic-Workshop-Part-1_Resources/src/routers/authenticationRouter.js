const {Router} = require('express');

const { registerControllerGet } = require("../controllers/registerController");
const authRouter = Router();


authRouter.get("/register",registerControllerGet);


module.exports = {authRouter};