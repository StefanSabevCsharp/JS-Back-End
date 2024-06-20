
const user = require("../models/User");

exports.register = (userData) => user.create(userData);