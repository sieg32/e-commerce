const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User_model = new Schema({

    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
    }

})

module.exports = mongoose.model('user',User_model);