const Recipe = require('../models/Recipe');

exports.CreateRecipe = async (recipe) => {
    return await Recipe.create(recipe);
}

exports.GetLastThreeRecipes =  () => Recipe.find().sort({ createdAt: -1 }).limit(3);

exports.GetAllRecipes = () => Recipe.find();

exports.GetRecipeById = (id) => Recipe.findById(id);

exports.UpdateRecipe = (id, recipe) => Recipe.findByIdAndUpdate(id, recipe, { runValidators: true });

exports.DeleteRecipe = (id) => Recipe.findByIdAndDelete(id);

exports.LikeRecipe = async (recipeId, user) => {
     return await Recipe.findByIdAndUpdate(recipeId, { $push: { recommendList: user } });
}

exports.GetRecipesBySearch = (search) => Recipe.find({ title: { $regex: search, $options: 'i' } });