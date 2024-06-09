

function isAuthorize(req, res, next) {
   const cookie = req.cookies['auth-cookie'];
    if (cookie) {
        next();  
    } 
}