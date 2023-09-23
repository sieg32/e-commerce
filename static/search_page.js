const url = location.href.split('/');
const query = url[url.length-1];
console.log(query);

const Listing = document.querySelector('#results');
const fetchProducts=async(query)=>{
    await  axios.get('/products/search'+ query).then((response)=>{
       
          const arrayProduct = response.data;
          arrayProduct.forEach(element => {
              const product_card = document.createElement('div')
              product_card.id= element.product_name;
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
  
              product_card.addEventListener('click',(elem)=>{
                  window.location.href = '/products/'+ product_card.id;
              })
  
              Listing.appendChild(product_card);
              
              
  
  
              
          });
      })
  }
  
  fetchProducts(query)




  const formfilter = document.querySelector('#formFilters');
  formfilter.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    const formdata = new FormData(formfilter);
    var newquery = query;
    formdata.forEach((value,key)=>{
        console.log(key, value);
        newquery = newquery+"&"+key+"="+value;
    })

    Listing.innerHTML="";
    fetchProducts(newquery);
    
    
    
  })