const bcrypt = require('bcrypt');


async function checkPasswords(password, rePassword) {
    return await bcrypt.compare(password, rePassword);
}



module.exports = {
    checkPasswords
}