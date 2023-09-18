const mongoose = require('mongoose')



const connect = async function(mongoose_url){

    try {

       await mongoose.connect(mongoose_url);
       console.log('database connected');
        
    } catch (error) {
        console.log(error);
    }

}
module.exports = connect;