
let registered = true;

const lform = document.querySelector('#login-form')

const login_text= document.querySelector('#textlogin');
switchRegister = function(){

  
    const email = document.createElement('input')
    email.id = "email";
    email.placeholder = "email";
    email.type="email";
    email.name="email";
    
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

    console.log(form_login);
    const formdata = new FormData(document.querySelector('#login_form'));
    const form_obj = {};

    formdata.forEach((value,key)=>{
        form_obj[key]=value;
    })
    console.log(form_obj);

    if(registered){
        axios.post('/user/login', form_obj,{
            Headers:{
                'content-type':'application/json',

            }
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log("error", error)
        })
    }else{
        axios.post('/user/register', form_obj,{
            Headers:{
                'content-type':'application/json',

            }
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log("error", error)
        })
    }
    

})