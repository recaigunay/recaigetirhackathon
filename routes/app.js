var express = require('express');
var router = express.Router();

//genel routing
router.get('/', function (req, res, next) {
    res.render('index');    
});

module.exports = router;
