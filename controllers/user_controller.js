const mongoose = require('mongoose');
const user = require('../db_schema/user_schema');
const { response } = require('express');

loginPage = (req, res)=>{
    let current = __dirname
     let Root = current.slice(0,-12);
    res.sendFile(Root +'/login.html');
       
}


createUser = async(req,res)=>{
    const temp_check = await user.find({username: req.body.username});
    console.log(temp_check.length);
    if(temp_check.length===0){
       
        const tempUserData = req.body;
        console.log(tempUserData);
        try{
            await user.create(tempUserData);
            
        }catch(error){
            console.log(error);
        }
        res.status(200).send({"login":"success"});
    }else
    {
        res.send({"login":"user already exist" });
    }
    


}


loginUser = async(req,res)=>{
    const found_user = await user.find({username:req.body.username})
    if(found_user.length === 0){
        res.send({"login": "username does not exist"});
    }else{
        if(found_user[0].password === req.body.password){
            res.send({"login": "success" })
        }else{
            res.send({"login":"password incorrect"})
        }
        
    }

    

}

module.exports = {loginPage, createUser, loginUser};