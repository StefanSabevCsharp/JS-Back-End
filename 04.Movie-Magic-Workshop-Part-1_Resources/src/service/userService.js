const { User } = require("../../models/User");

module.exports = {
    registerUser : async (email, password) => await  User.create({email, password}),
    getUserByEmail : async (email) =>  await User.findOne({email})
}