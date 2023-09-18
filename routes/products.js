const express = require('express');

const route = express.Router();


route.get('/getAll',(req,res)=>{
    res.send('route working');

})


module.exports = route;