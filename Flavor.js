/**
 * Created by student on 12/12/16.
 */
var express = require('express');
var router = express.Router();
var Flavor_dal = require('../model/Flavor_dal')

router.get('/all',function (req, res){
    Flavor_dal.getAll(function (err, result) {
        if(err){
            res.send(err);
        }
        else{
            res.render('Flavor/FlavorViewAll',{'result':result})
        }
    })
})



module.exports = router;