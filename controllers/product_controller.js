const mongoose = require('mongoose');
const product = require('../db_schema/model_product')


GetAllProduct = async (req,res)=>{
   
        
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

productPage = (req,res)=>{
    let current = __dirname;
    let Root = current.slice(0, -12);
    
    res.sendFile(Root + "/product_page.html");


}

searchPage = (req,res)=>{
    let current = __dirname;
    let Root = current.slice(0, -12);
    
    res.sendFile(Root + "/searchProduct.html");


}


searchProduct = async (req,res)=>{
   
    const Result = await product.find({product_name:{$regex: new RegExp(req.query.query,'i')},
    price:{$gte:req.query.minPrice || 0 , $lte:req.query.maxPrice || 99999999 },
    rating:{$gte:req.query.minRating || 0, $lte:req.query.maxRating || 5 }})

    res.send(Result);
}





module.exports = {addProduct, GetAllProduct, GetSpecificProduct, productPage, searchPage, searchProduct};