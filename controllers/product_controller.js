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

GetSpecificProduct = async (req,res)=>{
   
    
    try{
        const dataProduct = await product.findOne({product_name:req.params.id});
        console.log(dataProduct)
       

        if(dataProduct){
            res.send(dataProduct)

        }else{
            res.send('something went wrong')
        }

    }catch(error){
        console.log(error);
        res.send('server error');

    }
    
}





module.exports = {addProduct, GetProduct, GetSpecificProduct};