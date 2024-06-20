const router = require("express").Router();

const authService = require("../services/authService");
const { getErrorMessage } = require("../utils/errorParser");

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", async (req, res) => {
    const userData = req.body;

    try {
        console.log(userData);
        const token = await authService.register(userData);
        res.cookie("auth", token);
        return res.redirect("/");

    } catch (err) {
        res.render("register",{ error: getErrorMessage(err), userData});
    }
});

router.get("/login", (req, res) => {
    res.render("login");
});
router.post("/login", async (req, res) => {
    const userData = req.body;

    const token = await authService.login(userData);
    res.cookie("auth", token);
    return res.redirect("/",{error: getErrorMessage(err), userData});
});

router.get("/logout", (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
});

module.exports = router;
