console.log(200);

document.getElementById('add-btn').addEventListener('click',function(){
    const itemElement = document.getElementById('item');
    const quantityElement = document.getElementById('quantity');
    const item = itemElement.value;
    const quantity = quantityElement.value;
    itemElement.value = '';
    quantityElement.value = '';
    saveItemToLocalStorage(item,quantity);
    displayItem(item,quantity);
})

const getItemFromLocalStorage = ()=>{
    let savedItem = localStorage.getItem('cart');
    let cart = {};
    if(savedItem){
        cart = JSON.parse(savedItem);
    }
    return cart;
}

const saveItemToLocalStorage = (item,quantity)=>{
    const cart = getItemFromLocalStorage();
    cart[item] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const displayItem = (product,quantity)=>{
    const itemConatiner = document.getElementById('item-list');
    const itemLi = document.createElement('li');
    itemLi.innerText = `${product}: ${quantity}`;
    itemConatiner.appendChild(itemLi);
}


const getItem = ()=>{
    
    const allItem = getItemFromLocalStorage();
    for (const key in allItem) {
        const product = key;
        const quantity = allItem[key];
        console.log(product,quantity);
        displayItem(product,quantity);
    }
}
getItem();