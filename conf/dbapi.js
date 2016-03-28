var mysql = require('mysql');
var dbconf = require('./conf.db.js');
var dbapi = {};
dbapi.add = function(tabel, post,cb) {
		var connection = mysql.createConnection({
			host: dbconf.connection.host,
			user: dbconf.connection.user,
			port: 8889,
			password: dbconf.connection.password,
			database: dbconf.database
		});
		connection.connect();
		var query = 'INSERT INTO ' + tabel + ' SET ?';
		connection.query(query, post, cb);
		connection.end();
	}
dbapi.selectuser = function(tabel, id , columns, post, cb) {
		var connection = mysql.createConnection({
			host: dbconf.connection.host,
			user: dbconf.connection.user,
			port: 8889,
			password: dbconf.connection.password,
			database: dbconf.database
		});
		connection.connect();
		var query = 'SELECT ?? FROM ?? WHERE ' +	id + ' = ?';
		connection.query(query, [columns, tabel, post], cb);
		connection.end();
	}
module.exports = dbapi;