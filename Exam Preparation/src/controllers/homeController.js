
const router = require('express').Router();
const userService = require('../services/authService');

router.get('/', (req, res) => {
    res.render('home');
});


module.exports = router;