const router = require("express").Router();

const { isAuth, isLogged } = require("../middlewears/authMiddlewear");
const authService = require("../services/authService");
const { getErrorMessage } = require("../utils/errorParser");

router.get("/register",isLogged, (req, res) => {
    res.render("register");
});

router.post("/register",isLogged, async (req, res) => {
    const userData = req.body;

    try {
        console.log(userData);
        const token = await authService.register(userData);
        res.cookie("auth", token);
        return res.redirect("/");

    } catch (err) {
        console.log(getErrorMessage(err));
        res.render("register",{ error: getErrorMessage(err), userData});
    }
});

router.get("/login",isLogged, (req, res) => {
    res.render("login");
});
router.post("/login", isLogged,async (req, res) => {
    const userData = req.body;

    try{
        const token = await authService.login(userData);
        res.cookie("auth", token);
        res.redirect("/");
    }catch(err){
        return res.render("login",{error: getErrorMessage(err), userData});
    }

    
});

router.get("/logout",isAuth, (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
});

module.exports = router;
