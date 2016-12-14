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
        var Flavor_id = result.insertId;

        var query1 = 'INSERT INTO Inventor (Employee_id, Flavor_id, Date_invented) VALUES(?,?,?)';
        var queryData1 = [params.Employee_id, Flavor_id, new Date()]

        connection.query(query1,queryData1,function(err, result){
            callback(err,result);
        });

        callback(err, result);
    });

}

exports.getInventors = function(callback) {
    var query = 'Select First_Name, Last_Name, e.Employee_id from Employee e join Inventor i on e.Employee_id = i.Employee_id;';
    connection.query(query, function(err, result) {
        callback(err, result);
    });

}





