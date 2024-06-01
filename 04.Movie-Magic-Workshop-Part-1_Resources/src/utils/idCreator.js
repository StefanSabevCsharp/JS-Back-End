//create complicated function to generate unique id

function idCreator(){
    return 'xxxx-xxxx-xxxxx'.replace(/x/g, function(){
        return Math.floor(Math.random()*16).toString(16).toUpperCase();
    });
};

module.exports = {idCreator};