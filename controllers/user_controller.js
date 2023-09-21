const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const user = require("../db_schema/user_schema");
const { response } = require("express");

createToken = (username, email) => {
  const token = jwt.sign(
    {
      username: username,
      email: email,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "6h",
    }
  );
  console.log(token);

  return token;
};




loginPage = (req, res) => {
  let current = __dirname;
  let Root = current.slice(0, -12);
  res.sendFile(Root + "/login.html");
};
profilePage = (req, res) => {
  let current = __dirname;
  let Root = current.slice(0, -12);
  res.sendFile(Root + "/profile.html");
};





createUser = async (req, res) => {
  const temp_check = await user.find({ username: req.body.username });
  console.log(temp_check.length);
  if (temp_check.length === 0) {
    const tempUserData = req.body;
    console.log(tempUserData);
    try {
      await user.create(tempUserData);
    } catch (error) {
      console.log(error);
    }
    const token = createToken(req.body.username, req.body.email);

    res
      .status(200)
      .send({ login: "success", username: req.body.username, token: token });
  } else {
    res.send({ login: "user already exist" });
  }
};





loginUser = async (req, res) => {
  const found_user = await user.find({ username: req.body.username });
  if (found_user.length === 0) {
    res.send({ login: "username does not exist" });
  } else {
    const token = createToken(req.body.username, found_user[0].email);

    if (found_user[0].password === req.body.password) {
      res.send({ login: "success", username: req.body.username, token: token });
    } else {
      res.send({ login: "password incorrect" });
    }
  }
};





getUserInfo = async (req, res) => {
  const userData = await user.find({ username: res.locals.username });

  const { username, email, _id } = userData[0];

  res.send({
    authorization: "success",
    userdata: { username, email: email, id: _id },
  });
};


changePass= async(req,res)=>{
  const userData = await user.find({username:res.locals.username});
  const {password} = userData[0];
  const newpass ={};
  newpass['password']=req.body.password;

  if(password === req.body.oldpassword){
    console.log(newpass.password);
    const newValue= await user.findOneAndUpdate({username:res.locals.username},newpass, {new:true})
    res.send({"passchange":"success",
        newValue });
  }else{
    res.send({"passchange":"passwordNotMatch"});
  }


}

module.exports = { loginPage, createUser, loginUser, profilePage , changePass};
