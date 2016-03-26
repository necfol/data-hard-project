var express = require('express');
var router = express.Router();
var dbapi = require('../conf/dbapi');
/* GET users listing. */
router.post('/', function(req, res) {
	var r = dbapi.add({
		name: 'Necfol',
		phone: '13811111111'
	});
	console.error('出结果啦')
	console.error(r);
	// console.error(req.body)
	res.json('ok');
});

module.exports = router;