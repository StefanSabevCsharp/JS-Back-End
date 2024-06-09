

module.exports = {
    registerControllerGet: (req, res) => {
        res.render("register");
    },
    registerControllerPost: (req, res) => {
        const { email, password, rePassword } = req.body;
        if (password !== rePassword) {
            return res.render("register", { error: { message: "Passwords do not match!" } });
        }
        res.redirect("/");
    }
}