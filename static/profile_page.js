let userData = {};
const nameUser = document.querySelector('#name');
const emailUser = document.querySelector('#email');
const securityBtn = document.querySelector('#securityBtn');
const profileBtn = document.querySelector('#profileBtn');
const profileBox = document.querySelector('#profile');
const privacyBox=document.querySelector('#privacy');
const homeBtn = document.querySelector('#homeBtn');




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
