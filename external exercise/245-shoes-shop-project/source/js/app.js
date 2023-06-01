// DOM => Document Object Model
// BOM => Browser Object Model
const $ = document;

let allShoes = [
    {id: 1, name: 'Blue Shoes', pic: 'images/1.png', price: '53$', shortDescription: '1-Lorem ipsum, or lipsum as it is sometimes known'},
    {id: 2, name: 'Green Shoes', pic: 'images/2.png', price: '87$', shortDescription: '2-Lorem ipsum, or lipsum as it is sometimes known'},
    {id: 3, name: 'Yellow Shoes', pic: 'images/3.png', price: '34$', shortDescription: '3-Lorem ipsum, or lipsum as it is sometimes known'},
]

const container = $.querySelector('.container');

allShoes.forEach(function (shoes) {
    container.insertAdjacentHTML('beforeend', '<div class="product-card"><h1>'+ shoes.name +'</h1><p>'+ shoes.shortDescription +'</p><div class="product-pic" style="background-image: url('+ shoes.pic +');"></div><div class="product-info"><div class="product-price">'+ shoes.price +'</div><a href="product.html?id=' + shoes.id + '" class="product-button">See More</a></div></div>')
})