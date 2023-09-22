const mongoose  = require('mongoose');
const Schema = mongoose.Schema;



const productSchema = new Schema({
    product_name:{type:String,
        require : true},
    price:{type:Number, require:true},
    rating:{
        type:Number,

        require:true
    },
    description:{
        type:String,
        require:true
    }


})


module.exports = mongoose.model('product', productSchema)