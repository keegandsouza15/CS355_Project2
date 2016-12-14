/**
 * Created by student on 12/12/16.
 */
var express = require('express');
var router = express.Router();
var Flavor_dal = require('../model/Flavor_dal')

router.get('/all',function (req, res){
    Flavor_dal.getAll(function (err, result) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('Flavor/FlavorViewAll', {'result': result})
            };
        });
});

router.get('/add',function (req, res){
    Flavor_dal.getAll(function (err, result){
        Flavor_dal.getInventors(function (err, inventor) {


            if(err){
                res.send(err);
            }
            else{
                res.render('Flavor/FlavorAdd',{'result':result ,'inventor': inventor})
            }
    })
})
});

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



module.exports = router;