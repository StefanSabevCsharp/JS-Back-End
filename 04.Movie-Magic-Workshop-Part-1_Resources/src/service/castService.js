const cast = require("../../models/Cast");


module.exports = {
    createCast: async (name, age, born, imageURL) => {
        const result = await cast.create({ name, age, born, imageURL });
        return result;
    },
    getAllCasts: async () => {
        return await cast.find().lean();
    },
   
}