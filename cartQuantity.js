let cartQuantity = JSON.parse(localStorage.getItem('cartQuantity'));

function addToCart(value){
      
    if(cartQuantity + value <= 10){
        cartQuantity += value;

    }else if(cartQuantity + value > 10){
        document.querySelector('.display-error-message').innerHTML = `Your cart is full`;

        
    }

    document.querySelector('.display-cart-quantity').innerHTML = `Cart quantity is : ${cartQuantity}`;

    localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));

}

function removeFromCart(value) {
    if(cartQuantity + value  >= 0){
        cartQuantity += value;
    }else if(cartQuantity + value <= 0){
        document.querySelector('.display-error-message').innerHTML = `Your cart is empty, add product !`;
    }

    document.querySelector('.display-cart-quantity').innerHTML = `Cart quantity is : ${cartQuantity}`;

    localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));

}