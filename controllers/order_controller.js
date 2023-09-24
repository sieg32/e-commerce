const mongoose = require('mongoose');
const order = require('../db_schema/order_schema');


ordersPage = (req,res)=>{
    let current = __dirname;
    let Root = current.slice(0, -12);
    
    res.sendFile(Root + "/orders_page.html");

}


createOrder =async (req,res)=>{
    console.log(req.body);
    const tempObj = req.body;

    try{
        const orderData = await order.create(tempObj);
        orderData.orderProgress.push('order placed '+ new Date().toJSON());
       await orderData.save();
        res.send(orderData);

    }catch(error){
        console.log(error)
        res.send({"error":"something went wrong"});
    }
        
}

cancelOrder =async (req,res)=>{
    console.log(req.body)
    try{
        const orderData = await order.findById(req.body.orderId);
        orderData.orderProgress.push('order cancelled ' + new Date().toJSON())
        orderData.isFrozen = true;
        orderData.save();
        res.send(orderData)

    }catch(error){
        console.log(error)
        res.send('something went wrong')
    }





}



getOrders = async (req,res)=>{
    console.log(res.locals)

    const ordersData = await order.find({userName:res.locals.username})
    console.log(ordersData);

    res.send(ordersData);

}

module.exports = {ordersPage, createOrder, getOrders , cancelOrder};


