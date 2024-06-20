const router = require("express").Router();
const authService = require("../services/authService");

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

module.exports = router;
