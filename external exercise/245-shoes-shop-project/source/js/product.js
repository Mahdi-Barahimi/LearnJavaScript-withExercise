// ✌ :))

const $ = document;

let allShoes = [
    {id: 1, name: 'Blue Shoes', pic: 'images/1.png', price: '53$', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Blue Shoes)'},
    {id: 2, name: 'Green Shoes', pic: 'images/2.png', price: '87$', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Green Shoes)'},
    {id: 3, name: 'Yellow Shoes', pic: 'images/3.png', price: '34$', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Yellow Shoes)'},
]

const backBtn = $.getElementById('backBtn');
backBtn.addEventListener('click', function () {
    // history.back();
    location.href = 'file:///F:/SabzLearn_JS/MB%20JS/external%20exercise/245-shoes-shop-project/source/index.html';
})

const shoesName = $.getElementById('shoesName');
const shoesDiscription = $.getElementById('shoesDiscription');
const shoesPic = $.getElementById('shoesPic');

let shoesIdLocationParams = new URLSearchParams(location.search);
let shoesId = shoesIdLocationParams.get('id');

let targetShoes = allShoes.find(function (shoes) {
    return shoes.id == shoesId
})
if (targetShoes) {
    shoesName.innerHTML = targetShoes.name
    shoesDiscription.innerHTML = targetShoes.description
    shoesPic.setAttribute('src', targetShoes.pic)
} else {
    location.href = 'file:///F:/SabzLearn_JS/MB%20JS/external%20exercise/245-shoes-shop-project/source/index.html';
}