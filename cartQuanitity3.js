let cartQuantity = JSON.parse(localStorage.getItem('cartQuantity'));

function addToCart(value){
    if(cartQuantity + value <= 10){
        cartQuantity += value;
        
    }else if(cartQuantity + value > 10 ){
        document.querySelector('.display-error-message').innerHTML = 'Error the cart is full';

        return cartQuantity;
    }

    document.querySelector('.display-cart-quantity').innerHTML = `Cart quantity is : ${cartQuantity}`;

    localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));

    return cartQuantity;
}

function removeCart(value){
    /*
    if(cartQuantity + value <= 0){
        document.querySelector('.display-error-message').innerHTML = 'the cart is empty can\'t remove anything ';
    }
        */
    
    if(cartQuantity - value >= 0){
        cartQuantity -= value;
        document.querySelector('.display-cart-quantity').innerHTML = `Cart quantity is : ${cartQuantity}`;
    }else{
        document.querySelector('.display-error-message').innerHTML = `the cart is empty can\'t remove anything `;

        

        return cartQuantity;
    }

    localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));

    return cartQuantity;
}