const jwt = require("jsonwebtoken");
const util = require("util");
const SECRET = "jdsajsdajasdklsdadklajdljasldajd";

const sign = util.promisify(jwt.sign);
const verify = util.promisify(jwt.verify);

module.exports = {
    sign,
    verify,
    SECRET
};
