var mysql = require('mysql');
var dbconf = require('./conf.db.js');

var connection = mysql.createConnection({
	host: dbconf.connection.host,
	user: dbconf.connection.user,
	port: 3306,
	password: dbconf.connection.password,
	database: dbconf.database
});

connection.connect();
var dbapi = {};
dbapi.add = function(post) {
		connection.query('INSERT INTO users VALUES ?', post, function(error) {
			if (error) {
				console.log(error.message);
			} else {
				console.log('success');
			}
		});
		connection.end();
	}
	// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
	// 	if (err) throw err;
	// 	console.log('The solution is: ', rows[0].solution);
	// });
module.exports = dbapi;