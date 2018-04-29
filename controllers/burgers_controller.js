var express = require('express');
var burger = require('./../models/burger');
var router = express.Router();

router.get('/', function(req, res) {
    var info = {
        brgr: [],
    };

    burger.selectAll(function(data) {
        for(var i = 0; i < data.length; i++){
            info.brgr.push(data[i]);
        }
        res.render('index', info);
    });
    
});

router.post('/create', function(req, res) {
    burger.insertOne([req.body.burgerInput], function(){
        res.redirect('/');
    });
});

router.put('/update/:id', function(req, res){
    burger.updateOne([req.body.devoured], [req.params.id], function(){
        res.redirect('/');
    });
});

router.delete('/delete/:id', function(req, res){
    burger.deleteOne([req.params.id], function(){
        res.redirect('/');
    });
});



module.exports = router;