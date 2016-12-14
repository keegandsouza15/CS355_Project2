/**
 * Created by student on 12/12/16.
 */
var express = require('express');
var router = express.Router();
var Vendor_dal = require('../model/Vendor_dal')

router.get('/all',function (req, res){
    Vendor_dal.getAll(function (err, result) {
        if(err){
            res.send(err);
        }
        else{
            res.render('Vendor/VendorViewAll',{'result':result})
        };
    });
});

router.get('/', function(req, res) {
    if (req.query.Vendor_id == null) {
        res.send('Vendor id is null');
    }
    else {
        Vendor_dal.getById(req.query.Vendor_id, function (err, result) {
            Vendor_dal.getCost(req.query.Vendor_id, function (err, cost) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.render('Vendor/VendorViewById', {'result': result ,'cost':cost});
                }
            });
        });
    }
});

exports.update = function(params, callback) {
    var query = 'UPDATE resume SET resume_name = ?, account_id = ? WHERE resume_id = ?';
    var queryData = [params.resume_name, params.account_id, params.resume_id];
    /*   connection.query(query, queryData, function(err, result) {
     //delete company_address entries for this company
     resumeDeleteAll(params.resume_id, function(err, result){
     if(params.account_id != null) {
     //insert company_address ids
     resumeInsert(params.resume_id, params.account_id, function(err, result){
     callback(err, result);
     });}
     else {
     callback(err, result);
     }
     });
     });*/

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};


router.get('/update', function(req, res) {
    Vendor_dal.update(req.query, function(err, result){
        res.render('Conformation');
    });
});



router.get('/edit', function(req, res){
    if(req.query.Vendor_Name == null) {
        res.send('A Vendor Name is required');
    }
    else {
        Vendor_dal.getById(req.query.Vendor_id, function(err, result){
            Vendor_dal.edit(req.query, function (err, Address) {
                console.log(result);
                res.render('Vendor/VendorUpdate', {result: result, Address:Address});
            })

        });
    }

});


module.exports = router;