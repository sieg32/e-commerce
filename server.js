const express = require('express');
const port = 5000;
const products = require('./routes/products')
const user_route = require('./routes/user')
const order_route= require('./routes/order')
const connect = require('./db_connect/db.js')
require('dotenv').config();

const app = express();


/*---------------------------middleware--------------------------*/

app.use(express.static('./static'));
app.use(express.json());


/*  -------------------------routes--------------------      */ 



app.use('/products', products);
app.use('/user',user_route);
app.use('/orders',order_route);


/*-------------------basic routes---------------------------- */

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
    
})






/*-------------------------server listening and db connection------------------ */

start = async ()=>{
    
    try{
        await connect(process.env.MONGOOSE_URI);
    
        app.listen(port, console.log('server started at port ' + port));
    
    }catch(error){
        console.log(error);
    }
}

start();