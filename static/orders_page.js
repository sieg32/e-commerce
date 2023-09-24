const product = document.querySelector('.order');
const listing = document.querySelector('#ordersList')

const cloned = product.cloneNode({deep:true})
console.log(cloned.childNodes[1].innerHTML);

for(let i = 0 ; i<10;i++){
    const cloned = product.cloneNode({deep:true})
    listing.appendChild(cloned);
    console.log(i)
}