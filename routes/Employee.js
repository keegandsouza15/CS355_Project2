/**
 * Created by keegan on 11/16/16.
 */
var express = require('express');
var router = express.Router();
var Employee_dal = require('../model/Employee_dal');


// View All Employees
router.get('/all', function(req, res) {
    Employee_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('Employee/EmployeeViewAll', { 'result':result });
        }
    });

});


router.get('/drivers', function(req, res){
    Employee_dal.getDrivers(function(err,result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('Employee/EmployeeDrivers', {'result': result});
        }
    });
});

module.exports = router;
