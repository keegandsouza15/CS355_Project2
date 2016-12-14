var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Vendor;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(Vendor_id, callback) {
    var query = 'SELECT * FROM Vendor WHERE Vendor_id = ?';
    var queryData = [Vendor_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getCost = function(Vendor_id, callback){
    var query = 'CALL Get_Vendor_Sales (?)';
    var queryData = [Vendor_id];

    connection.query(query, queryData, function(err, cost) {
        callback(err, cost);
    });
}


