/**
 * Created by keegan on 11/16/16.
 */
var express = require('express');
var router = express.Router();
var Ingredient_dal = require('../model/Ingredient_dal');


// View all ingredients
router.get('/all', function(req, res) {
    Ingredient_dal.getAll(function(err, result){
            if (err) {
                res.send(err);
            }
            else {
                res.render('Ingredient/IngredientViewAll', {'result': result});
            }
    });

});

router.get('/TotalCost', function(req, res) {
        Ingredient_dal.getCost(function(err, cost) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('Ingredient/IngredientTotalCost', {'cost':cost});
            }
    });

});



module.exports = router;