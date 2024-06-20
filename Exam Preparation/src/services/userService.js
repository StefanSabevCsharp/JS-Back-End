const User = require("../models/User");
const Course = require("../models/Course");


exports.getOne = (id) => User.findById(id);

exports.subscribe = async (courseId, userId) => {
    
    await Course.findByIdAndUpdate(courseId, {
        $push: { signUpList: userId },
    });
};