const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const Batches = Schema({
    _id:Schema.Types.ObjectId,
    batchNo:String,
    product:{type:Schema.Types.ObjectId, ref:'Products'},
    Quantity:Number,
    BuyingPrice:Number,
    
},
{timestamps:true},
);

module.exports = Mongoose.model('Batches',Batches);