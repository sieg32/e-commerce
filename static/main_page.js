const usernameAvatar = document.querySelector('#user h3')
if(localStorage.getItem("user")){
    usernameAvatar.textContent = localStorage.getItem('user');
}

const profile_box = document.querySelector('#user_box');
const userAvatar_box = document.querySelector('#user');
userAvatar_box.addEventListener('click',(elem)=>{
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
    window.location.href="/user/orders";
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


const Listing = document.querySelector('#product-listing');


const fetchProducts=async()=>{
  await  axios.get('/products/').then((response)=>{
        const arrayProduct = response.data;
        arrayProduct.forEach(element => {
            const product_card = document.createElement('div')
            const image=document.createElement('img');
            image.src="/icon/user-128-512.png";
            const div = document.createElement('div');
            const name=document.createElement('h4');
            name.textContent= element.product_name;
            const price = document.createElement('p');
            price.textContent = "price: "+ element.price + " rs";
            const rating = document.createElement('p');
            rating.textContent = 'rating: ' + element.rating;

            div.appendChild(name);
            div.appendChild(price);
            div.appendChild(rating);
            product_card.appendChild(image);
            product_card.appendChild(div);

            product_card.classList.add('product');

            Listing.appendChild(product_card);
            


            
        });
    })
}


fetchProducts();