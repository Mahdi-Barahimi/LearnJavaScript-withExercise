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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// callback function
function CallbackFunc1 (CallbackFunc) {
    console.log('log1')
    CallbackFunc();
}
function CallbackFunc2 () {
    console.log('log2');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// async (don't wait for 3)
function asyncLog () {
    console.log(1);
    console.log(2);
    setTimeout(function() {
        console.log(3);
    }, 2000)
    console.log(4);
    console.log(5);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// use callbackc function for sync (wait for 3)
function syncLog () {
    function firstSyncLog () {
        console.log(1);
        console.log(2);
    }
    function secondSyncLog (callbackFunction) {
        setTimeout(function() {
            console.log(3);
            callbackFunction();
        }, 2000)
    }
    function lastSyncLog () {
        console.log(4);
        console.log(5);
    }
    firstSyncLog();
    secondSyncLog(lastSyncLog);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// pure function:
// 1- Given the same input, it should always return the same output
// 2- The function should not cause any side effects outside of its scope
function pureFunction (num1, num2) {
    let tenPlus = 10;
    return Math.pow(num1, num2) + tenPlus;
}
function pureFunctionBtn () {
    console.log('Math.pow(2, 3) + 10 =',pureFunction(2, 3));
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// composition function, run call function in call function in call function ...
function compositionFunctionBtn () {
    function powComposition (num1, num2) {
        return Math.pow(num1, num2);
    }
    function numMultipliedBy2Composition (num) {
        return num * 2;
    }
    function numPlusTenComposition (num) {
        return num + 10;
    }
    console.log('((2^3)*2)+10 =', numPlusTenComposition(numMultipliedBy2Composition(powComposition(2, 3))));
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HOF: Higher Order Function
function HOFbtn () {
    function HOFexample (callbackFunction) {
        console.log('HOFexample is a Higher Order Function');
        // callbackFunction();
    }
    HOFexample();

    function HOFexample2 () {
        console.log('HOFexample2 is a Higher Order Function');

        return function innerFunction () {
            console.log('it\'s a inner function');
        }
    }
    // for run inner function:
    HOFexample2()();
    // or
    let runInnerFunction = HOFexample2();
    runInnerFunction();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// write "use strict" on the first line of your js file for regular coding
// you can use "use strict" in the local scope

// local "use strict"
function useStrictBtn () {
    function useStrict () {
        "use strict"

        let letNumber = 0;
        console.log('letNumber:', letNumber);

        number = 1;
        console.log('number:', number);
}
    useStrict()
}