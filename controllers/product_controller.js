const mongoose = require('mongoose');
const product = require('../db_schema/model_product')


GetProduct = async (req,res)=>{
    
    const Product_list = await product.find({});
    res.send(Product_list);
}

addProduct = async (req,res)=>{

    console.log(req.body);
    const nigga = await product.create(req.body)

    res.send(nigga);
}





module.exports = {addProduct, GetProduct};