

var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Ingredient Group By (Ingredient_Name);';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getCost = function(callback) {
    var query = 'SELECT Ingredient_Name, Cost_Per_Pound, SUM(Cost_Per_Pound) AS Total_Cost From Ingredient i JOIN Flavor f ON i.Flavor_id = f.Flavor_id GROUP BY (Ingredient_Name) HAVING count(f.Flavor_id) > 1'
    connection.query(query, function(err, cost) {
        callback(err,cost);
    });
};

/*exports.insert = function(params, callback) {
    var query = 'INSERT INTO Flavor(Flavor_Name,  Package_Design) VALUES (?, ?)';
    var queryData = [params.Flavor_Name, params.Package_Design];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

}
*/
