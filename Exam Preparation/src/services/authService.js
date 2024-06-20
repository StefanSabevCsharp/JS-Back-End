const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const SECRET = require("../lib/jwt").SECRET;

exports.register = async (userData) => {
    if (userData.password !== userData.repass) {
        throw new Error("Passwords do not match");
    }
    const user = await User.findOne({ email: userData.email });
    if (user) {
        throw new Error("Email is already taken");
    }
    const createdUser = User.create(userData);
    const token = await generateToken(createdUser);

    return token;
};

exports.login = async (userData) => {
    const { email, password } = userData;

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid email or password");
    }
   return generateToken(user);

};

function generateToken(userData){
    const id = userData._id;
    const payLoad = {
        _id: id,
        username: userData.username,
        email: userData.email,
    };
    
    //TO DO: have to export the sectet in deffirent file
    const token = jwt.sign(payLoad, SECRET, { expiresIn: "2h" });
    return token;
}
