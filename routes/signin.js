var express = require('express');
var router = express.Router();
var dbapi = require('../conf/dbapi');
var crypto = require('crypto');
var striptags = require('striptags');
/* GET users listing. */
router.post('/', function(req, res) {
	var username = striptags(req.body.username);
	var password = crypto.createHmac('sha256', req.body.password).update('data').digest('hex');
	dbapi.login('user', 'username', username, password, function(err, r) {
		if (r && Number(r.length) > 0) {
			r = JSON.parse(JSON.stringify(r))
			res.cookie('username', username, { expires: new Date(Date.now() + 9000000000), httpOnly: false });
			res.json(r[0].id);
		} else {
			res.json('error');
		}
	});
});

module.exports = router;