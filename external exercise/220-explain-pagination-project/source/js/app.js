const $ = document;

const listItems = [
    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'Ali', family: 'Safa' },
    { id: 7, name: 'Akbar', family: 'Moradi' },
    { id: 8, name: 'Hashem', family: 'Sabzevari' },
    { id: 9, name: 'Hesam', family: 'Heydari' },
    { id: 10, name: 'Sara', family: 'Tank' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },
    
];

const countItem = $.getElementById('countItem');
countItem.addEventListener('keydown', function (event) {event.preventDefault()});

const list = $.getElementById('list');
const pagination = $.getElementById('pagination');
let btns = $.querySelectorAll('button');

let countRowToShow = countItem.value;
let currentPage = 1;
countItem.addEventListener('input', function () {
    countRowToShow = countItem.value;
    loadUser();
});

let lastRowForShow = countRowToShow;
let firstRowForShow = 0;

let indexBtn;

function loadUser () {
    lastRowForShow = countRowToShow * currentPage
    firstRowForShow = countRowToShow * currentPage - countRowToShow

    list.innerHTML = '';
    pagination.innerHTML = '';
    
    if (lastRowForShow >= listItems.length) {
        lastRowForShow = listItems.length
        currentPage = 1;
    }
    
    for (firstRowForShow; firstRowForShow < lastRowForShow; firstRowForShow++) {
        let newDiv = $.createElement('div');
        newDiv.innerHTML = listItems[firstRowForShow].name + ' ' + listItems[firstRowForShow].family;
        newDiv.classList.add('item');
        list.appendChild(newDiv);
    }
    for (indexBtn = 1; indexBtn < Math.ceil(listItems.length / countRowToShow) + 1; indexBtn++) {
        let newBtn = $.createElement('button');
        newBtn.innerHTML = indexBtn;
        if (+currentPage === indexBtn) {
            newBtn.className = 'active';
        }
        pagination.appendChild(newBtn);
    }
    btns = $.querySelectorAll('button');

    pageNum(btns)
}
function pageNum(btns) {
    btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            currentPage = btn.innerHTML;
            loadUser()
        })
    })
}
window.addEventListener('load', loadUser)