let userData = {};
const nameUser = document.querySelector('#name');
const emailUser = document.querySelector('#email');
const securityBtn = document.querySelector('#securityBtn');
const profileBtn = document.querySelector('#profileBtn');
const profileBox = document.querySelector('#profile');
const privacyBox=document.querySelector('#privacy');
const homeBtn = document.querySelector('#homeBtn');

const popupbtn = document.querySelector('#popup_pass_changed div button');

const formPass  = document.querySelector('#passwordForm');





const populateUsername = async()=>{
   await axios.get('/user/getUserInfo',{
        headers:{
            author : localStorage.getItem("token")
        }
    }).then((response)=>{
        console.log(response);
        if(response.data.authorization === "failed" || response.data.authorization === "token expire"){
            console.log("nigga your expired")
            
            window.location.href = ('/user/login');
        }else{
            userData = response.data.userdata;
        }
    })
    
    nameUser.textContent = userData.username;
    email.textContent = userData.email;
   
}

populateUsername()

securityBtn.addEventListener('click',()=>{
    profileBtn.classList.remove('focus');
    securityBtn.classList.add('focus');

    profileBox.style.display = "none";
    privacyBox.style.display = "flex";


})

profileBtn.addEventListener('click',()=>{
    securityBtn.classList.remove('focus');
    profileBtn.classList.add('focus');

    profileBox.style.display="flex";
    privacyBox.style.display="none";
})

homeBtn.addEventListener('click',()=>{
    window.location.href= "/";
})

formPass.addEventListener('submit',(element)=>{
    element.preventDefault();
    const formdata = new FormData(formPass);
    const val={};
    formdata.forEach((value,key)=>{
        val[key]=value;
    })

    if(val.password=== val.passwordconfirm){
        axios.post('/user/changePass',val,{
            headers:{
                author:localStorage.getItem('token')
            }
        }).then((response)=>{
            if(response.data.passchange === "success"){
                const popup = document.querySelector('#popup_pass_changed');
                popup.style.display="flex";


            }
        })
    }



})


popupbtn.addEventListener('click',()=>{
    window.location.href = "/";
})

