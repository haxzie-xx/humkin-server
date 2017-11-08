var mysql = require('mysql');
var config = require('./dbconfig.json');
var connection;

module.exports = () => {
    if (!connection) {
        connection = mysql.createConnection(config);

        connection.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return connection;
}
