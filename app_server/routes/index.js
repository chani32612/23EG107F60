var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome', message: 'Hi Chanakya' });
});

router.get('/location', function(req, res, next) {
  res.render('index', { title: 'Location Info', message: '' });
});

router.get('/location/review', function(req, res, next) {
  res.render('index', { title: 'Review', message: '' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Us', message: '' });
});

module.exports = router;
