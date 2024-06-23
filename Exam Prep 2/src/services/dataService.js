const Stone = require('../models/Stone');

exports.CreateStone = async (stoneData,ownerID) => {

   stoneData.owner = ownerID; 
   await  Stone.create(stoneData);
}

exports.GetAllStones = () => Stone.find();

exports.GetLastThree = () => Stone.find().sort({createdAt: -1}).limit(3);

exports.GetStoneById = (id) => Stone.findById(id);

exports.EditStone = (id,stoneData) => Stone.findByIdAndUpdate(id,stoneData);

exports.DeleteStone = (id) => Stone.findByIdAndDelete(id);

exports.LikeStone = async(id,userID) => {
      await Stone.findByIdAndUpdate(id,{$push: {likedList: userID}});
};