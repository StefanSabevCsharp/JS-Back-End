const router = require("express").Router();
const authService = require("../services/authService");


router.get("/register", (req, res) => { 
    res.render("register");
});

router.post("/register", async (req, res) => {
    const userData = req.body;
  
    const token = await authService.register(userData);
    res.cookie("auth", token);
    return res.redirect("/");
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

router.get("/logout", (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
});

module.exports = router;