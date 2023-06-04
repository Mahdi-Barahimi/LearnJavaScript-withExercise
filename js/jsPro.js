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
// event Bubbling and event Capturing

// event Bubbling (from child to parent element)
const eventBubblingDiv = $.querySelectorAll('.eventBubbling');
eventBubblingDiv.forEach(function (divB, index) {
    divB.addEventListener('click', function () {
        console.log('div ' + (index + 1));

    })
})

// event Capturing (from parent to child element)
const eventCapturingDiv = $.querySelectorAll('.eventCapturing');
eventCapturingDiv.forEach(function (divC, index) {
    divC.addEventListener('click', function () {
        console.log('div ' + (index + 1));
    }, {capture:true})
})

// stop event Bubbling with event.stopPropagation()
const stopEventBubbling = $.querySelectorAll('.stopEventBubbling');
stopEventBubbling.forEach(function (divS, index) {
    divS.addEventListener('click', function (event) {
        event.stopPropagation()
        console.log('div ' + (index + 1));
    })
})