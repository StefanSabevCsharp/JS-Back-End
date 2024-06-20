const Course = require("../models/Course");


exports.getAllData = (req, res) => Course.find();

exports.getOne = (id) => Course.findById(id);

exports.create = async (req, res) => {
    
    const { title, type, certificate, image, description, price } = req.body;
    if (!title || !type || !certificate || !image || !description || !price) {
        throw { message: "All fields are required!" };
    }
    const owner = req.user._id;

    return Course.create({ title, type, certificate, image, description, price,owner});
};
