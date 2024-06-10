const { secret } = require("../config/expressConfing");
const { getUserByEmail } = require("../service/userService");
const { checkPasswords } = require("../utils/checkPasswords");
const { signPromise } = require("../utils/jwthelper");



module.exports = {
    loginControllerGet: (req, res) => {
        res.render("login");
    },
    loginControllerPost: async (req, res) => {
        const { email, password } = req.body;
        let user = await getUserByEmail(email);
        if (!user) {
            return res.render("login", { error: "User not found" });
        }
        let isMatch = await checkPasswords(password, user.password);
        if (!isMatch) {
            return res.render("login", { error: "Incorrect password" });
        }

        const payload = {
            id : user._id,
            email : user.email
        }
        const token = await signPromise(payload,secret,{expiresIn : "2h"});
        res.cookie("auth-cookie",token,{httpOnly : true});
        res.redirect("/");

    }
}