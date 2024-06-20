const Course = require("../models/Course");
const User = require("../models/User");

exports.getAllData = (req, res) => Course.find();

exports.getLastThree = (req, res) =>
    Course.find().sort({ createdAt: -1 }).limit(3);

exports.getOne = (id) => Course.findById(id);

exports.create = async (req, res) => {
    const { title, type, certificate, image, description, price } = req.body;
    if (!title || !type || !certificate || !image || !description || !price) {
        throw { message: "All fields are required!" };
    }
    const owner = req.user._id;

    const createdCourse = await Course.create({
        title,
        type,
        certificate,
        image,
        description,
        price,
        owner,
    });

    await User.findByIdAndUpdate(req.user._id, {
        $push: { createdCourses: createdCourse._id },
    });
};


exports.edit = async (req, res) => {
    const { title, type, certificate, image, description, price } = req.body;
    if (!title || !type || !certificate || !image || !description || !price) {
        throw { message: "All fields are required!" };
    }
    
    await Course.findByIdAndUpdate(req.params.id, {
        title,
        type,
        certificate,
        image,
        description,
        price,
    });
};