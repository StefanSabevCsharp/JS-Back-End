const jwt = require("../lib/jwt");
const SECRET = require("../lib/jwt").SECRET;
const Recipe = require('../models/Recipe');

exports.authMiddlewear = async (req, res, next) => {

  const token = req.cookies["auth"];

  if (!token) {
    return next();
  }
 
  try{
    const decoded = await  jwt.verify(token, SECRET);

    req.user = decoded;
    res.locals.isAuthenticated = true; 
    res.locals.user = decoded;
    next();
  }catch(e){
    res.clearCookie("auth");
    res.redirect("/auth/login");
  }
};

exports.isAuth = (req,res,next) => {

  if(!req.user){
    return res.redirect("/auth/login");
  }
  next();
}
exports.isLogged = (req,res,next) => {

  if(req.user){
    return res.redirect("/");
  }
  next();
}

exports.isOwner = async (req,res,next) => {

    try{
      const recipe = await Recipe.findById(req.params.id).populate("owner").lean();
      const isOwner = recipe.owner._id.toString() === req.user?._id.toString();
      if(!isOwner){
        return res.redirect("/404");
      }
      next();
    }catch(e){
      res.render("404");
    }
};

exports.isNotOwner = async (req,res,next) => {

  try{
    const recipe = await Recipe.findById(req.params.id).populate("owner").lean();
    const isOwner = recipe.owner._id.toString() === req.user?._id.toString();
    if(isOwner){
      return res.redirect("/404");
    }
    next();
  }catch(e){
    res.render("404");
  }
};