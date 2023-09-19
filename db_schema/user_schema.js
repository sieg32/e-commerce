const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User_model = new Schema({

    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,

    },
    password:{
        type:String,
    }

})

module.exports = mongoose.model('user',User_model);