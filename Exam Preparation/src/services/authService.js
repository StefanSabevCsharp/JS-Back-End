const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt")

exports.register = (userData) => {
    if (userData.password !== userData.repass) {
        throw new Error("Passwords do not match");
    }
    const user = User.findOne({ email: userData.email });
    if (user) {
        throw new Error("Email is already taken");
    }
    return user.create(userData);
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
    //TO DO: have to export the sectet in deffirent file
    const payLoad = {
        _id: user._id,
        username: userData.username,
        email: userData.email,
    };
    const token = await jwt.sign(payLoad, "sectet", { expiresIn: "2h" });
    return token;

};
