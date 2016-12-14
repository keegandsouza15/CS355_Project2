var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    // Uses a view.
    var query = 'SELECT * FROM Flavor_Inventor_view';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO Flavor(Flavor_Name,  Package_Design) VALUES (?, ?)';
    var queryData = [params.Flavor_Name, params.Package_Design];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

}



