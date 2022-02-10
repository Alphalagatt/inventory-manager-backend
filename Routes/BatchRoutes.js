const express = require("express");
const Mongoose = require("mongoose");
const Batch = require("../Models/Batch");
const router = express.Router();

router.get('/',(req,res,next)=>{
    Batch.find({}).exec((err,result)=>{
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
    Batch.findById(req.params.id).exec((err,result)=>{
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
    let batch={
        _id:Mongoose.Types.ObjectId,
        batchNo:req.body.batchNo,
        product:req.body.product,
        Quantity:req.body.Quantity,
        BuyingPrice:req.body.BuyingPrice,
    };
    let newBatch = new Batch(batch);
    newBatch.save((err,result)=>{
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
    Batch.findByIdAndDelete(req.params.id).exec((err,result)=>{
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