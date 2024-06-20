const jwt = require("../lib/jwt");
const SECRET = require("../lib/jwt").SECRET;
const dataService = require("../services/dataService");

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
};

exports.isLogged = (req,res,next) => {

  if(req.user){
    return res.redirect("/");
  }
  next();
}

exports.isOwner = async (req,res,next) => {
  
  const course = await dataService.getOne(req.params.id).populate("owner").lean();

  if(course.owner._id != req.user._id){
    return res.redirect("/");
  }
  next();
}

