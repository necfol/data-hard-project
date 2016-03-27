var express = require('express');
var router = express.Router();
var dbapi = require('../conf/dbapi');
/* GET users listing. */
router.post('/', function(req, res) {
	// var r = dbapi.add('user', {
	// 	username: 'Necfol',
	// 	sex: 1,
	// 	createtime: 1111111111111,
	// 	phone: 13811111111
	// });
	// console.error(req.body)
	res.json('ok');
});

module.exports = router;