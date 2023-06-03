const $ = document;
const themeBtns = $.querySelectorAll('.btn');
themeBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        $.documentElement.style.setProperty('--theme-color', event.target.dataset.color)
    })
})