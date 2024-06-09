const util = require('util');
const jwt = require('jsonwebtoken');

const signPromise = util.promisify(jwt.sign);
const verifyPromise = util.promisify(jwt.verify);

module.exports = {
    signPromise,
    verifyPromise
}



