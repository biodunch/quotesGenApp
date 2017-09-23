var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quotes Generator' });
});

router.get('/logout', function(req, res, next) {
  res.send('done!')
})

module.exports = router;
