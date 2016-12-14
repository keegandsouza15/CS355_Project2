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

exports.edit = function(Vendor_id, callback) {
    var query = 'select * from Vendor v join Addresses a on v.Vendor_id = a.Vendor_id';
    var queryData = [Vendor_id]
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE Vendor SET Vendor_name = ? WHERE Vendor_id = ?';
    var queryData = [params.Vendor_Name, params.Vendor_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};