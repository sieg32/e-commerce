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
    
    
    
    login_text.innerHTML= "already have an account <a href='login.html'>login</a>";
    

}

switchLogin = function(){
    const email = document.querySelector('#email');
    email.innerHTML = "";

}

const register_btn = document.querySelector('#textlogin a');

register_btn.addEventListener('click', (elem)=>{
    console.log(registered);
    elem.preventDefault();
    if(registered){
        switchRegister();
        registered = false;
    }else if(!registered){
        
        switchLogin()
    }
    
})