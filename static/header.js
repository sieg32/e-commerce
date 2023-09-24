
const logo = document.querySelector('#logo')
logo.addEventListener('click',()=>{
    window.location.href = '/';
})
const usernameAvatar = document.querySelector('#user h3')
if(localStorage.getItem("user")){
    usernameAvatar.textContent = localStorage.getItem('user');
}

const profile_box = document.querySelector('#user_box');
const userAvatar_box = document.querySelector('#user');

userAvatar_box.addEventListener('click',(elem)=>{
    console.log('good')
    if(localStorage.getItem('user')){

        if(profile_box.style.display === "flex" ){
            profile_box.style.display = "none";
        }else{
            profile_box.style.display="flex";
        }
    }else{
        window.location.href= '/user/login'
    }
})



const view_profile = document.querySelector('#view_profile');
view_profile.addEventListener('click',()=>{
    window.location.href="/user/profile";
})


const orders = document.querySelector('#orders');
orders.addEventListener('click',()=>{
    window.location.href="/orders";
})

const logOut = document.querySelector('#logOut');
const popupConfirm = document.querySelector('#confirmPopup');
logOut.addEventListener('click',()=>{
    popupConfirm.style.display="flex";

})

const btn_confirm = document.querySelector('#btn_confirm');
const btn_no = document.querySelector('#btn_no');

btn_no.addEventListener('click',()=>{
    popupConfirm.style.display="none";
})

btn_confirm.addEventListener('click',()=>{
   
    localStorage.clear();
    window.alert('logged out');
    window.location.href = '/';

    
})

const searchBar = document.getElementById('search-div');
console.log(searchBar);
searchBar.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    const formdata = new FormData(event.target);
    formdata.forEach((value,key)=>{
        console.log(key,value);
        window.location.href ='/products/?query='+value;

    })
    
})