let $ = document;

// get element by id:
spanId.style.color = 'Green';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// options in addEventListener
const eventOnceOptionBtn = $.getElementById('eventsOnceOption');
eventOnceOptionBtn.addEventListener('click', function () {
    console.log('click');
}, {once:true})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// event bubbling (from child to parent element)
const eventBubblingDiv = $.querySelectorAll('.eventBubbling');
eventBubblingDiv.forEach(function (div, index) {
    div.addEventListener('click', function (event) {
        console.log("div " + (index + 1));
        event.target.style.backgroundColor = 'skyBlue'
    })
})