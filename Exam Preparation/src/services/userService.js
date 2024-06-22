const User = require("../models/User");
const Course = require("../models/Course");


exports.getOne = (id) => User.findById(id);

exports.subscribe = async (courseId, userId) => {

    const course = await Course.findById(courseId).populate("signUpList").lean();
    const isSubscribed = course.signUpList.some(x => x._id == userId);
    if(isSubscribed){
        return ("You are already subscribed to this course!")
    }

    
    await Course.findByIdAndUpdate(courseId, {
        $push: { signUpList: userId },
    });
};