var mysql = require('mysql');
var dbconf = require('./conf.db.js');

var connection = mysql.createConnection({
	host: dbconf.connection.host,
	user: dbconf.connection.user,
	port: 8889,
	password: dbconf.connection.password,
	database: dbconf.database
});

connection.connect();
var dbapi = {};
dbapi.add = function(tabel, post) {
		var query = 'INSERT INTO ' + tabel + ' SET ?';
		connection.query(query, post, function(error, result) {
			if (error) {
				return false;
			} else {
				return true;
			}
		});
		connection.end();
	}
	// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
	// 	if (err) throw err;
	// 	console.log('The solution is: ', rows[0].solution);
	// });
module.exports = dbapi;