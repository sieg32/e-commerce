jwt = require('jsonwebtoken');

authorize = (req,res,next)=>{
   
    if(req.headers.author){

        try{

          const nigga = jwt.verify(req.headers.author,process.env.JWT_SECRET_KEY );
         
          res.locals= nigga;
          
          next(); 
        }catch(error){
            console.log(error);
            res.send({"authorization":"token expire"});
        }
        
        }else{
            res.send({"authorization":"failed"});
        }
}

module.exports = authorize;