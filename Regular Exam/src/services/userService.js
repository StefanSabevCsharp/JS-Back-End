const User = require("../models/User");

exports.GetUser = (Id) => User.findById(Id);;