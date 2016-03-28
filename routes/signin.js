var express = require('express');
var router = express.Router();
/* GET users listing. */
router.post('/', function(req, res) {
	console.error('看看session',req.session)
	req.session.user = req.body.phone
  res.json('ok');
});

module.exports = router;
