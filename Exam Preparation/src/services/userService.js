const User = require("../models/User");


exports.getOne = (id) => User.findById(id);