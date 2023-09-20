
let registered = true;

const lform = document.querySelector('#login-form')

const username_box = document.querySelector('#username');
const doesnt_exist = document.querySelector('#doesnt-exist');
const already_exist = document.querySelector('#already-exist');
const pw_incorrect = document.querySelector('#pw_incorrect');
const password_box = document.querySelector('#password');


username_box.addEventListener('focus',()=>{
    
    doesnt_exist.classList.add("hidden");
    already_exist.classList.add("hidden");
})

password_box.addEventListener('focus',()=>{
    pw_incorrect.classList.add('hidden');
})







const login_text= document.querySelector('#textlogin');

sendData=(url,form)=>{
    axios.post(url, form,{
        Headers:{
            'content-type':'application/json',

        }
    }).then((response)=>{
        console.log(response);
        if(response.data.login === "success"){
            console.log("logged in");
            console.log(response.data)
            window.alert('logged in');

            localStorage.setItem("token",response.data.token);
            localStorage.setItem("user", response.data.username);
            
            window.location.href = "/";
        }else if(response.data.login === "username does not exist"){
            console.log("does not exist")
           
            console.log(doesnt_exist);
            doesnt_exist.classList.remove('hidden');
        }else if(response.data.login === "password incorrect"){
            console.log("password incorrect");
            pw_incorrect.classList.remove('hidden');
            
        }else if(response.data.login === "user already exist"){

            console.log("already exists")
            already_exist.classList.remove("hidden");
        }
        

       
    }).catch((error)=>{
        console.log("error", error)
    })
    
}

switchRegister = function(){

  
    const email = document.createElement('input')
    email.id = "email";
    email.placeholder = "email";
    email.type="email";
    email.name="email";
    email.required = true;
    
    const input_form = document.querySelector('#inputs form')
    
    input_form.insertBefore(email, input_form.firstChild );
    
    const btn = document.querySelector('#login-btn');
    btn.textContent="register";
    
    
    
    login_text.innerHTML= "already have an account <a href='login'>login</a>";
    
    registered= false;
}

switchLogin = function(){
    const email = document.querySelector('#email');
    email.innerHTML = "";

}

const register_btn = document.querySelector('#textlogin a');

register_btn.addEventListener('click', (elem)=>{
    console.log(registered);
    elem.preventDefault();
   switchRegister();
    
})


const form_login = document.querySelector('#login_form');
form_login.addEventListener('submit', (event)=>{
    event.preventDefault();

   
    const formdata = new FormData(document.querySelector('#login_form'));
    const form_obj = {};

    formdata.forEach((value,key)=>{
        form_obj[key]=value;
    })
   
    const Response_login ={};

    if(registered){
       sendData('/user/login',form_obj);
       
    }else{
       sendData('/user/register', form_obj);
       
      
    }
    

})