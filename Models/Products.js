const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

module.exports = Mongoose.model('Products',Schema({
    _id:Schema.Types.ObjectId,
    prodId:String,
    prodName:String,
    prodDesc:String,
    sellingPrice:Number,
    Batches:[{type:Schema.Types.ObjectId, ref:'Batches'}],
}));