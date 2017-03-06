var express = require('express');
var router = express.Router();

/* GET SignIn page. */
router.get('/', function(req, res, next) {
    res.render('SignIn', { title: 'SignIn' });
});

module.exports = router;
