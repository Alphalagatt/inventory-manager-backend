const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const Customer = Schema({
    _id:Schema.Types.ObjectId,
    CustName:String,
    CustEmail:String,
});

module.exports = Mongoose.model('Customers',Customer);