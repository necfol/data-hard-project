var express = require('express');
var router = express.Router();
var dbapi = require('../conf/dbapi');
var crypto = require('crypto');
var striptags = require('striptags');
/* GET users listing. */
router.post('/', function(req, res) {
	var username = striptags(req.body.username);
 	var password = crypto.createHmac('sha256', req.body.password).update('data').digest('hex');
	dbapi.selectuser('user', 'username', 'id', username, function(err, r) {
		if(r && Number(r.length) > 0) {
			res.json('error');
		} else {
			req.session.user = username;
			dbapi.add('user', {
				username: username,
				password:password
			}, function(adderr, addr) {
				if(adderr) {
					res.json('error');
				}else {
					req.session.user = username;
					res.json('success');
				}
			});

		}
	});

});

module.exports = router;