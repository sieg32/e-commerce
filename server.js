const express = require('express');
const port = 5000;
const products = require('./routes/products')
const connect = require('./db_connect/db.js')
require('dotenv').config();

const app = express();

app.use(express.static('./static'))

app.use('/product', products)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
    
})

start = async ()=>{
    
    try{
        await connect(process.env.MONGOOSE_URI);
    
        app.listen(port, console.log('server started at port ${port}... '));
    
    }catch(error){
        console.log(error);
    }
}

start();