const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const Sales = Schema({
    _id:Schema.Types.ObjectId,
    Customer:{type:Schema.Types.ObjectId, ref:'Customers'},
    Products:[
        {
            product:{type:Schema.Types.ObjectId, ref:'Products'},
            Quantity:Number,
            TotalCost:Number
        }
    ],
    TotalSale:Number,
},
{timestamps:true},
);


module.exports = Mongoose.model('Sales',Sales);