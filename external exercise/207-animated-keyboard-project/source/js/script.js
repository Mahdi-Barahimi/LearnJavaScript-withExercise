const $ = document;
const keys = $.querySelectorAll('li');
const type = $.querySelector('#type');
function addAnimationKeys(event) {
    keys.forEach(function (key) {
        if (key.innerHTML === event.key.toUpperCase() || key.id === event.key.toUpperCase()) {
            key.classList.add('hit');
            key.addEventListener('animationend', function () {
                key.classList.remove('hit');
            })
        }
    })
}
$.addEventListener('keypress', function (event) {
    keys.forEach(function (key) {
        if (key.innerHTML === event.key.toUpperCase()) {
            type.innerHTML += event.key;
        }
    })
})
$.addEventListener('keyup', function (event) {
    if (event.key === ' ') {
        type.innerHTML += ' ';
    } else if (event.key === 'Backspace') {
        type.innerHTML = type.innerHTML.slice(0, -1);
    }
})
$.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
        event.preventDefault();
    }
    addAnimationKeys(event)
})