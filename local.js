const setProduct=()=>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    //console.log(product,quantity);
    displayProduct(product,quantity);
    setProductToLocalStorage(product,quantity);
}

const displayProduct = (product,quantity)=>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} ${quantity}`;
    ul.appendChild(li);
}
const getExistingCart=()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart
}

const setProductToLocalStorage =(product,quantity)=>{
    const existingCart = getExistingCart();
    existingCart[product]=quantity;
    const stringifiedCart = JSON.stringify(existingCart);
    localStorage.setItem('cart',stringifiedCart);
}

const getProductFromLocalStorageToDisplay =()=>{
    const existingCart = getExistingCart();//get the stored cart
    for(const item in existingCart){
        const quantity = existingCart[item];
        displayProduct(item,quantity);
    }
}

getProductFromLocalStorageToDisplay();