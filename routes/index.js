var express = require('express');
var router = express.Router();
var ip = require('ip');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'K8S Test 1', date: new Date(), ip: ip.address() });
});

module.exports = router;
