let itemsCount = document.getElementById('cart-items');
let mobileItemsCount = document.getElementById('mobile-cart-items');
let laptopCount = document.getElementById('laptop');
let mobileCount = document.getElementById('mobile');
let tshirtCount = document.getElementById('tshirt');
let rubikxCubeCount = document.getElementById('rubikxCube');
let shoppingCart = [];

itemsCount.innerHTML = shoppingCart.length;


laptopCount.innerHTML = 0;
mobileCount.innerHTML = 0;
tshirtCount.innerHTML = 0;
rubikxCubeCount.innerHTML = 0;

let addToCart = (product, price) => {
    let found = false; 
    shoppingCart.forEach((item, index) => {
        if(item.product === product){
            shoppingCart[index].count += 1;
            found = true; 
        }
    });
    if (!found) {
        shoppingCart.push({
            product: product,
            price: price,
            count: 1
        });
    }
    console.log(shoppingCart);
    itemsCount.innerHTML = shoppingCart.reduce((total , current) => {
        return total + current.count
    },0); 
    mobileItemsCount.innerHTML = shoppingCart.reduce((total , current) => {
        return total + current.count
    },0); 

};
let removeFromCart = (product, price) => {
    let found = false;

    shoppingCart.forEach((item, index) => {
        if(item.product === product && shoppingCart[index].count > 1){
                shoppingCart[index].count -= 1;
                found = true;
        }
    });

    if(!found){
        let deleteItem = shoppingCart.filter((item) => item.product !== product);
        shoppingCart = [...deleteItem]
    }
    console.log(shoppingCart);
    itemsCount.innerHTML = shoppingCart.reduce((total , current) => {
        return -(total - current.count)
    },shoppingCart.length);
    mobileItemsCount.innerHTML = shoppingCart.reduce((total , current) => {
        return -(total - current.count)
    },shoppingCart.length); 
    
};

function shopping(){
    if(shoppingCart.length === 0){
        alert('Your cart is empty !')
    }
    else{
        let checkOut = shoppingCart.map(item => `${item.count} ${item.product} - Rs.${item.price} per item : Total Rs.${item.count * item.price}`).join('\n');
        alert(`Your order is placed \n ${checkOut}`);

    }
}
