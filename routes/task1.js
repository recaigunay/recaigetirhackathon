
//1 NOLU TASK İÇİN REST APİ

var express = require('express');
var router = express.Router();
var moment = require('moment');

var Records = require('../models/records');

//searchRecord get yapılırsa..
router.get('/', function(req, res, next) {
    //post denemesi bu html içinde yapılabilir..
    res.render('searchRecord');
})

//searchRecord post yapılırsa...
router.post('/',function(req,res,next) {  
   
    //formatsız gelirse burada önlem alınabilir...
    //data body den geliyorsa ordan al, url den geliyorsa da ordan al.. postman den denemeler için
    var startDate = req.body.startDate ? req.body.startDate :req.query.startDate;
    var endDate = req.body.endDate ? req.body.endDate :req.query.endDate;

    Records.find({  createdAt: {
        $gte: new Date(startDate),
        $lt:  new Date(endDate)  
    }}).limit(20).exec(function(error, result) {
        if ( error) {
            return res.status(500).json({
                title : 'an error occured',
                error:error
            })
        }
        return res.status(200).json({
            message : 'Success',
            obj:result
        })
    })
  

});

module.exports =router;