const dataService = require('../services/dataService');
const { getErrorMessage } = require('../utils/errorParser');
const router = require('express').Router();

router.get("/:id", async (req, res) => {
 
    const isLogged = !!req.user; 

    try{
        const stone = await dataService.GetStoneById(req.params.id)
        .populate("owner").populate("likedList").lean();

        const isOwner = req.user?._id.toString() === stone.owner?._id.toString();
        console.log(`is owner vuv details id ${isOwner}`);
        const isLiked = stone.likedList.some(x => x._id.toString() === req.user?._id.toString());
        res.render("details", {...stone,isLogged,isOwner,isLiked} ); 
 
    }catch(err){
        console.log(getErrorMessage(err));  
        res.redirect("/404");
    }


});



 
module.exports = router;