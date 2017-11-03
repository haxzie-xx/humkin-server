var mysql = require('mysql');
var config = require('./dbconfig.json');
var db;

module.exports = () => {
    if (!db) {
        db = mysql.createConnection(config);

        db.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}
