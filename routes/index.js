var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

// about page 
router.get('/about', function(req, res) {
    res.render('pages/about');
});

module.exports = router;
