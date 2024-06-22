const Stone = require('../models/Stone');

exports.CreateStone = async (stoneData,ownerID) => {

   stoneData.owner = ownerID;
   await  Stone.create(stoneData);
}