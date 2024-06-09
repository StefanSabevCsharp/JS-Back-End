const {Router} = require('express');

const { registerControllerGet, registerControllerPost } = require("../controllers/registerController");
const authRouter = Router();


authRouter.get("/register",registerControllerGet);
authRouter.post("/register",registerControllerPost);


module.exports = {authRouter};