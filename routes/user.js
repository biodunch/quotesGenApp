const express = require('express');
const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();

/* GET users listing. */
router.get('/', ensureLoggedIn, function(req, res, next) {
  console.log(req.user);
  res.render('profile',{user: req.user});
});

module.exports = router;
