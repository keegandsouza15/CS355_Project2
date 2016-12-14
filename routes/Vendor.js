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
/*
router.get('/add',function (req, res){
    Flavor_dal.getAll((function (err, result) {
        if(err){
            res.send(err);
        }
        else{
            res.render('Flavor/FlavorAdd',{'result':result})
        }
    }))
})

router.get('/insert', function(req, res){
    // simple validation

    if(req.query.Flavor_Name == null) {
        res.send('Flavor Name must be provided.');
    }
    else if(req.query.Package_Design == null) {
        res.send('Package Design must be provided.');
    }
    else {
        Flavor_dal.insert(req.query, function(err,result) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('Conformation');
            }
        });
    }
});

router.get('/delete', function(req, res){
    if(req.query.account_id == null) {
        res.send('address_id is null');
    }
    else {
        account_dal.delete(req.query.account_id, function(err, result){
            if(err) {
                res.send(err);
            }
            else {
                //poor practice, but we will handle it differently once we start using Ajax
                res.redirect(302, '/account/all');
            }
        });
    }
});*/

module.exports = router;