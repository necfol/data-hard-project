var express = require('express');
var router = express.Router();
/* GET users listing. */
router.post('/', function(req, res) {
	console.error(req.body)
  res.json('ok');
});

module.exports = router;
