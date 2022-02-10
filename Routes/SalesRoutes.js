const express = require("express");
const Mongoose = require("mongoose");
const Sales = require("../Models/Sales");
const router = express.Router();

router.get('/',(req,res,next)=>{
    Sales.find({}).exec((err,result)=>{
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
    Sales.findById(req.params.id).exec((err,result)=>{
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
    let Sale={
        _id:Mongoose.Types.ObjectId,
        Customer:req.body.Customer,
        Products:req.body.Products,
        TotalSale:req.body.TotalSale,
    };
    let newSale = new Sales(Sale);
    newSale.save((err,result)=>{
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
    Sales.findByIdAndDelete(req.params.id).exec((err,result)=>{
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