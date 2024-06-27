const router = require('express').Router();
const { isOwner, isAuth, isNotOwner } = require('../middlewears/authMiddlewear');
const dataService = require('../services/dataService');
const { getErrorMessage } = require('../utils/errorParser');
const userService = require('../services/userService');

router.get('/:id', async (req, res) => {

    const recipe = await dataService.GetRecipeById(req.params.id)
    .populate("recommendList").populate("owner").lean();

    const isOwner = recipe.owner._id.toString() === req.user?._id.toString();
    const isLoggedIn = !!req.user;
    const isLiked = recipe.recommendList.some(x => x._id.toString() === req.user?._id.toString());
    const numberOfLikes = recipe.recommendList.length;

    res.render('details', { ...recipe, isOwner, isLoggedIn, isLiked, numberOfLikes});

});

router.get('/:id/edit', isOwner, async (req, res) => {

    try{
        const recipe = await dataService.GetRecipeById(req.params.id).lean();
        res.render('edit', {...recipe});

    }catch(e){
        res.render("edit", {error: getErrorMessage(e), ...req.body});
    }
});

router.post('/:id/edit', isOwner, async (req, res) => {

    try{
        //add validations of new object req.body in the models recipe.js

        const { title, ingredients, instructions, description, image } = req.body;
        const recipe = { title, ingredients, instructions, description, image };
        await dataService.UpdateRecipe(req.params.id, recipe);
        res.redirect(`/details/${req.params.id}`);

    }catch(e){
        res.render("edit", {error: getErrorMessage(e), ...req.body});
    }
});

router.get("/:id/delete", isOwner, async (req, res) => {
    try{
        await dataService.DeleteRecipe(req.params.id);
        res.redirect("/recipes");
    }catch(e){
        res.render("404");
    }
});

router.get("/:id/like",isAuth,isNotOwner, async (req, res) => {

    try{
        const recipeId = req.params.id;
        const userId = req.user._id;

        const user = await userService.GetUser(userId).lean();
        
        await dataService.LikeRecipe(recipeId, user);
        res.redirect(`/details/${recipeId}`);

    }catch(e){
        res.render("404");
    }
});


module.exports = router;