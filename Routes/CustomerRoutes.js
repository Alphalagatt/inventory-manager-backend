const express = require("express");
const Mongoose = require("mongoose");
const Customers = require('../Models/Customer');
const router = express.Router();

router.get('/',(req,res,next)=>{
    Customers.find({}).exec((err,result)=>{
        if(err){
            res.status(400).json({
                message:"Unsuccesful!!",
                Error:err.message,
            })
        }else{
            res.status(200).json(result);
        };
        
    });
});


router.get('/:id',(req,res,next)=>{
    Customers.findById(req.params.id).exec((err,result)=>{
        if(err){
            res.status(400).json({
                message:"Unsuccesful!!",
                Error:err.message,
            })
        }else{
            res.status(200).json(result);
        };
        
    });
});

router.post('/',(req,res,next)=>{
    cust={
        _id:Mongoose.Types.ObjectId(),
        CustName:req.body.CustName,
        CustEmail:req.body.CustEmail,
    };
    let newCust = new Customers(cust);
    newCust.save((err,result)=>{
        if(err){
            res.status(400).json({
                Error:err.message,
                message:"unable to save Customer!!",
            })
        }else{
            res.status(201).json({
                Result:result,
            });
        };
    });
});



router.delete('/:id',(req,res,next)=>{
    Customers.findByIdAndDelete(req.params.id).exec((err,result)=>{
        if(err){
            res.status(400).json({
                message:"Unsuccesful!!",
                Error:err.message,
            })
        }else{
            res.status(200).json(result);
        };
        
    });
});






module.exports = router;