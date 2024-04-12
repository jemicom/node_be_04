var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
// localhost:4000
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'React Backend' });
  res.sendFile(path.join(__dirname + '..'+'views'+'index.html'))
});

module.exports = router;
