const router = require("express").Router();
const authService = require("../services/authService");
const cookieParser = require("cookie-parser");

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", async (req, res) => {
    const userData = req.body;
    try {
        await authService.register(userData);
        return res.redirect("/auth/login");
    } catch (err) {
        return res.redirect("/auth/register", { error: err.message });
    }
});

router.get("/login", (req, res) => {
    res.render("login");
});
router.post("/login", async (req, res) => {
    const userData = req.body;

    const token = await authService.login(userData);
    res.cookie("auth", token); 
    return res.redirect("/");
});

module.exports = router;
