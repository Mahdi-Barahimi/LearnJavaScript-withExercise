const $ = document;

const products = [
    {id: 1, name: 'album1', image: 'Images/Album1.png', price: 12.99, status: 'readyToAdd', userCount: '1'},
    {id: 2, name: 'album2', image: 'Images/Album2.png', price: 14.99, status: 'readyToAdd', userCount: '1'},
    {id: 3, name: 'album3', image: 'Images/Album3.png', price: 16.99, status: 'readyToAdd', userCount: '1'},
    {id: 4, name: 'album4', image: 'Images/Album4.png', price: 19.99, status: 'readyToAdd', userCount: '1'},
    {id: 5, name: 'Coffee', image: 'Images/Coffee.png', price: 10.99, status: 'readyToAdd', userCount: '1'},
    {id: 6, name: 'Shirt', image: 'Images/Shirt.png', price: 9.99, status: 'readyToAdd', userCount: '1'},
];

const shopItems = $.querySelector('.shop-items');
const cartItems = $.querySelector('.cart-items');
const cartTotalPrice = $.querySelector('.cart-total-price');
let addButtons = $.querySelectorAll('.shop-item-button');

products.forEach(function (product) {
    // refactor start


    /*
    let newShopItem = $.createElement('div');
    newShopItem.classList.add('shop-item');

        let newShopItemTitle = $.createElement('span');
        newShopItemTitle.classList.add('shop-item-title');
        newShopItemTitle.id = product.id;
        newShopItemTitle.innerHTML = product.name;

        let newShopItemImage = $.createElement('img');
        newShopItemImage.classList.add('shop-item-image');
        newShopItemImage.setAttribute('src', product.image);

        let newShopItemDetails = $.createElement('div');
        newShopItemDetails.classList.add('shop-item-details');

            let newShopItemPrice = $.createElement('span');
            newShopItemPrice.classList.add('shop-item-price');
            newShopItemPrice.innerHTML = product.price + '$';

            let newShopItemButton = $.createElement('button');
            newShopItemButton.classList.add('btn', 'btn-primary', 'shop-item-button');
            newShopItemButton.innerHTML = 'ADD TO CART';

            newShopItem.append(newShopItemTitle, newShopItemImage, newShopItemDetails);
        newShopItemDetails.append(newShopItemPrice, newShopItemButton);
    shopItems.appendChild(newShopItem);
    */

    shopItems.insertAdjacentHTML('beforeend', '<div class="shop-item"><span class="shop-item-title" id="' + product.id + '">' + product.name + '</span><img class="shop-item-image" src="' + product.image + '"><div class="shop-item-details"><span class="shop-item-price">' + product.price + '</span><button class="btn btn-primary shop-item-button">ADD TO CART</button></div></div>')

    // refactor end

    addButtons = $.querySelectorAll('.shop-item-button');
})
addButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        let targetProduct = products.findIndex(function(product) {
            return product.id === +(button.parentElement.parentElement.firstElementChild.id);
        })

        let cartItemRow = $.createElement('div');
        cartItemRow.classList.add('cart-row');

            let cartItem = $.createElement('div');
            cartItem.classList.add('cart-item', 'cart-column');

                let cartItemImage = $.createElement('img');
                cartItemImage.classList.add('cart-item-image');
                cartItemImage.setAttribute('src', products[targetProduct].image);

                let cartItemTitle = $.createElement('span');
                cartItemTitle.classList.add('cart-item-title');
                cartItemTitle.innerHTML = products[targetProduct].name;

                cartItem.append(cartItemImage, cartItemTitle);
            
            let cartPrice = $.createElement('span');
            cartPrice.classList.add('cart-price', 'cart-column');
            cartPrice.innerHTML = products[targetProduct].price;

            let cartItemCount = $.createElement('div');
            cartItemCount.classList.add('cart-quantity', 'cart-column');

                let cartItemCountInput = $.createElement('input');
                cartItemCountInput.classList.add('cart-quantity-input');
                cartItemCountInput.min = 1;
                cartItemCountInput.addEventListener('keydown', function (event) {event.preventDefault()});
                cartItemCountInput.type = 'number';
                cartItemCountInput.value = 1;
                cartItemCountInput.addEventListener('input', function() {
                    let countOfProduct = cartItemCountInput.value;
                    products[targetProduct].userCount = countOfProduct;
                    totalPriceCalculator();
                })

                let cartItemCountRemove = $.createElement('button');
                cartItemCountRemove.classList.add('btn', 'btn-danger');
                cartItemCountRemove.innerHTML = 'Remove';
                cartItemCountRemove.addEventListener('click', function () {
                    cartItemCountRemove.parentElement.parentElement.remove();
                    button.removeAttribute('disabled');
                    button.classList.add('btn-primary');
                    button.classList.remove('btn-primary-disabled');
                    button.innerHTML = 'ADD TO CART';
                    products[targetProduct].status = 'readyToAdd';
                    products[targetProduct].userCount = 1;

                    totalPriceCalculator();
                })

                cartItemCount.append(cartItemCountInput, cartItemCountRemove);

            cartItemRow.append(cartItem, cartPrice, cartItemCount);
        cartItems.appendChild(cartItemRow);

        products[targetProduct].status = 'added';
        button.setAttribute('disabled', 'disabled');
        button.classList.remove('btn-primary');
        button.classList.add('btn-primary-disabled');
        button.innerHTML = 'added';

        totalPriceCalculator();
    })
})
function totalPriceCalculator() {

    let totalPrice = 0;
    let finalproductPrice = 0;
        
    let addedProducts = products.filter(function (product) {
        return product.status === 'added';
    })
    
    addedProducts.forEach(function (addedProduct) {
        finalproductPrice += addedProduct.price * addedProduct.userCount;
    })
    totalPrice += finalproductPrice;
    cartTotalPrice.innerHTML = totalPrice.toFixed(2) + '$';
}