const jwt = require('jsonwebtoken');
const { secret } = require('../src/config/expressConfing');

function isAuthorize(req, res, next) {
   const token = req.cookies['auth-cookie'];
    if (!token) {
       return next();  
    } 
    
    try{
        const decodedToken = jwt.verify(token,secret);
        req.user = decodedToken;
        next();
    }catch(err){
        res.clearCookie('auth-cookie');
        res.redirect('/auth/login');
    }
}

module.exports = isAuthorize;