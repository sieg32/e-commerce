const mongoose  = require('mongoose');
const Schema = mongoose.Schema;



const productSchema = new Schema({
    Product_name:String,
    price:Number,
    rating:Number,


})


module.exports = mongoose.model('product', productSchema)