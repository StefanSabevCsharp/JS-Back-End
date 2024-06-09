const { getUserByEmail } = require("../service/userService");
const { checkPasswords } = require("../utils/checkPasswords");
const { signPromise } = require("../utils/jwthelper");

const secret = "dasjasdjsdjaksadsdsakdkdsalkldsaklsadkljq2klejkl21jdklk21jl1d21"


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
            console.log("ima li ismatch greshka");
            return res.render("login", { error: "Incorrect password" });
        }

        const payload = {
            id : user._id,
            email : user.email
        }
        const token = await signPromise(payload,secret,{expiresIn : "2h"});

        console.log(token);

    }
}