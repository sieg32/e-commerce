const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const order = new Schema({
    userName: {
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:1

    },
    contactNo:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10

    },
    address:{
        type:String,
        required:true,
    },

    orderDateTime:{
        type:String,
        default: new Date().toJSON()
    },

    orderProgress:{
        type: [String],
        
        

    }
    , 
    isFrozen:{
        type: Boolean,
        default:false
    }

    
})


module.exports = mongoose.model('order',order);