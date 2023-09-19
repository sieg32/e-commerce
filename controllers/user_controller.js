const mongoose = require('mongoose');
const user = require('../db_schema/user_schema');

loginPage = (req, res)=>{
    let current = __dirname
     let Root = current.slice(0,-12);
    res.sendFile(Root +'/login.html');
       
}


createUser = async(req,res)=>{
    const nigga = req.body;
    console.log("user created ");
    try{
        await user.create(nigga);

    }catch(error){
        console.log(error);
    }

     res.status(200).send({msg:"created"});

}


loginUser = async(req,res)=>{
    console.log(req.body);
    res.send(req.body);

}

module.exports = {loginPage, createUser, loginUser};