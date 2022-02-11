const express = require("express");
const Mongoose = require("mongoose");
const Products = require("../Models/Products");
const router = express.Router();

router.get('/',(req,res,next)=>{
    Products.find({}).exec((err,result)=>{
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
    Products.findById(req.params.id).exec((err,result)=>{
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
    prod={
        _id:Mongoose.Types.ObjectId(),
        prodId:req.body.prodId,
        prodName:req.body.prodName,
        prodDesc:req.body.prodDesc,
        sellingPrice:req.body.sellingPrice,
    };
    let newProd = new Products(prod);
    newProd.save((err,result)=>{
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
    Products.findByIdAndDelete(req.params.id).exec((err,result)=>{
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