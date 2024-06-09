const { getUserByEmail, registerUser } = require("../service/userService");
const { checkPasswords } = require("../utils/checkPasswords");
const bcrypt = require('bcrypt');


module.exports = {
    registerControllerGet: (req, res) => {
        res.render("register");
    },
    registerControllerPost: async (req, res) => {
        const { email, password, rePassword } = req.body;
        console.log(email, password, rePassword);
        if(!checkPasswords(password, rePassword)){
            console.log("Passwords do not match");
            return res.render("register");
        }
        const user = await getUserByEmail(email);
        if(user){
            console.log("Email already exists"); 
            return res.render("register");
        } 
        const hash = await bcrypt.hash(password, 10);
        await registerUser(email, hash);
        res.redirect("/auth/login");
    }
}