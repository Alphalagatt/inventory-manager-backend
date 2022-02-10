const bodyParser = require('body-parser');
const express = require('express');
const Mongoose = require('mongoose');
const port = process.env.port || 3000;
const app = express();
const Cors = require('cors');
const dbPath = process.env.dbPath;


const CustomerRoutes = require('./Routes/CustomerRoutes');
const ProductRoutes = require('./Routes/ProductRoutes');
const BatchRoutes = require('./Routes/BatchRoutes');
const SalesRoutes = require('./Routes/SalesRoutes');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(Cors());

Mongoose.connect(dbPath,(err)=>{
    if(!err){
        console.log("Connection was successful!!");
    }else{
        console.log(err.message);
    }
});

app.use('/customers',CustomerRoutes);
app.use('/products',ProductRoutes);
app.use('/batches',BatchRoutes);
app.use('/sales',SalesRoutes);



app.listen(port,()=>{
    console.log('listening on http://www.localhost:3000/');
});