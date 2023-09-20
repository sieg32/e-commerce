
axios.get('/user/getUserInfo',{
    headers:{
        author : localStorage.getItem("token")
    }
}).then((response)=>{
    console.log(response);
    if(response.data.authorization === "failed" || response.data.authorization === "token expire"){
        console.log("nigga your expired")
    }
})