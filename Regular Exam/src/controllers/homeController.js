const router = require("express").Router();
const { isAuth } = require("../middlewears/authMiddlewear");
const userService = require("../services/authService");
const dataService = require("../services/dataService");
const { getErrorMessage } = require("../utils/errorParser");

router.get("/", async (req, res) => {
    const lastThreeRecipes = await dataService.GetLastThreeRecipes().lean();
    res.render("home", { lastThreeRecipes });
});

router.get("/create", isAuth, (req, res) => {
    res.render("create");
});

router.post("/create", isAuth, async (req, res) => {
    
    const { title, ingredients, instructions, description, image } = req.body;
   
    const owner = req.user._id;
    const recipe = {
        title,
        description,
        ingredients,
        instructions,
        image,
        owner,
    };
    try {
        await dataService.CreateRecipe(recipe);
        res.redirect("/recipes");
    } catch (error) {
        res.render("create", { error: getErrorMessage(error), ...recipe });
    }
});

router.get("/recipes", async (req, res) => {
    try {
        const allRecipes = await dataService.GetAllRecipes().lean();
        res.render("recipes", { allRecipes });
    } catch (error) {
        res.render("recipes", { error: getErrorMessage(error) });
    }
});

router.get("/search", async (req, res) => {
    try {
        const allRecipes = await dataService.GetAllRecipes().lean();
        res.render("search", { allRecipes });
    } catch (error) {
        res.render("search", { error: getErrorMessage(error) });
    }
});

router.post("/search", async (req, res) => {

    const { search } = req.body;
    try {
        const allRecipes = await dataService.GetRecipesBySearch(search).lean();
        res.render("search", { allRecipes });
    } catch (error) {
        res.render("search", { error: getErrorMessage(error) });
    }
});

module.exports = router;
