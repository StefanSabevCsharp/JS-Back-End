const {Router} = require('express');

const { registerControllerGet, registerControllerPost } = require("../controllers/registerController");
const { loginControllerGet, loginControllerPost } = require('../controllers/loginController');
const authRouter = Router();


authRouter.get("/register",registerControllerGet);
authRouter.post("/register",registerControllerPost);
authRouter.get("/login",loginControllerGet);
authRouter.post("/login",loginControllerPost);
authRouter.get("/logout",(req,res) => {
    res.clearCookie("auth-cookie");
    res.redirect("/");
})


module.exports = {authRouter};