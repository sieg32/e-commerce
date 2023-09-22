const url = window.location.href.split('/');

const param = url[url.length -1];

const populateData = (data)=>{
    const name = document.querySelector('#name h2');
    const price = document.querySelector('#price h4');
    const rating = document.querySelector('#price h5');
    const description = document.querySelector('#description p');
    const Pagetitle = document.querySelector('head title');

    Pagetitle.textContent = data.product_name;
    name.textContent = data.product_name;
    price.textContent = "₹"+data.price;
    rating.textContent = "rating: "+data.rating;
    description.textContent = data.description;

}






const getProductinfo =(param)=>{
     
    axios.get('/products/api/'+ param).then(
        (response)=>{
            console.log(response);
            populateData(response.data);
        }
    )
 }

 const buyProduct = (productName)=>{
    console.log(productName);
 }
 getProductinfo(param)





 const cartBtn = document.querySelector('#addCart');
 const buyBtn = document.querySelector('#buy');

 buyBtn.addEventListener('click',(elem)=>{

    buyProduct(param);
    
 })