/**
 * Created by keegan on 11/16/16.
 */
var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Employee;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getDrivers = function(callback) {
    //Sub Query
    var query = 'Select * From (select *from Drivers)d join Employee e on e.Employee_id  = d.Employee_id;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};
