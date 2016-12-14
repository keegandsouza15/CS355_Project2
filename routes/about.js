/**
 * Created by dell on 12/13/2016.
 */
/**
 * Created by student on 12/12/16.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res){
    res.render('about');

})

router.get('/er', function (req,res) {
    res.render('Project 1 ER Diagram.ejs');

})

router.get('/rs', function (req,res){
    res.render('Relational Schema Project 1 - Page 1.ejs');
})

module.exports = router;