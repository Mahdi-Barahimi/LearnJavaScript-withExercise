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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// arrow function
function arrowFunctionBtn () {
    // simple model
    const arrowFunctionSumPow = (num1, num2, num3 = 10) => { // num3 have default value
        num1 += num2;
        return Math.pow(num1, num3);
    }
    console.log(arrowFunctionSumPow(1, 1));
    
    // for write function in one line
    const arrowFunctionSumPowOneLine = (num1, num2, num3) => Math.pow((num1 + num2), num3);
    console.log(arrowFunctionSumPowOneLine(1, 1, 10));

    // for an entry don't use ()
    const arrowFunctionNumPlus = num => num + num
    console.log(arrowFunctionNumPlus(5));
    
    // for write function in one line object
    const arrowFunctionObject = (userId, username, userAge = 18) => ({id: userId, name: username, age: userAge}); // userAge default value is 18
    console.log(arrowFunctionObject(1, 'Mahdi', 19)); // UserAge value update to 19
}
function arrowFunction2Btn () {
    // use arrow function with forEach, map, ...
    let numbers = [1, 2, 3, 4, 5];
    numbers.forEach(number => console.log(number))

    let numbersX2 = numbers.map(number => number * 2)
    console.log('\nnumbers x 2:' ,numbersX2);
}
// use arrow function with addEventListener, ...
const eventArrowFunction = $.getElementById('eventArrowFunction');
eventArrowFunction.addEventListener('click', (event) => {console.log(event)})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// spread syntax in array and objects
const spreadSyntaxArrayBtn = () => {
    let noSpreadSyntaxNumbers = [1, 2, 3, 4, 5];
    let copyNoSpreadSyntaxNumbers = noSpreadSyntaxNumbers;
    copyNoSpreadSyntaxNumbers.push(6);
    console.log('noSpreadSyntaxNumbers:', noSpreadSyntaxNumbers);
    console.log('copyNoSpreadSyntaxNumbers + push(6):', copyNoSpreadSyntaxNumbers);

    // now with spread syntax
    let spreadSyntaxNumbers = [1, 2, 3, 4, 5];
    let copySpreadSyntaxNumbers = [...spreadSyntaxNumbers];
    copySpreadSyntaxNumbers.push(6);
    console.log('spreadSyntaxNumbers:', spreadSyntaxNumbers);
    console.log('copySpreadSyntaxNumbers + push(6):', copySpreadSyntaxNumbers);

    // for log each items without while, for, forEach, ...
    console.log('spreadSyntaxNumbers items:', ...spreadSyntaxNumbers);
    
    // for contact two or more array
    console.log('spreadSyntaxNumbers items + 1000 + copySpreadSyntaxNumbers items ===>  ', ...spreadSyntaxNumbers, 1000, ...copySpreadSyntaxNumbers);
    
    // use in function
    const spreadInFunction = (num1, num2, num3, num4, num5) => console.log('num1:', num1, 'num2:',num2, 'num3:',num3, 'num4:',num4, 'num5:',num5);
    spreadInFunction(...spreadSyntaxNumbers)
    
    // test for objects
    let spreadSyntaxObject = {id: 1 , name: 'Mahdi', age: 22};
    let copySpreadSyntaxObject = {...spreadSyntaxObject};
    copySpreadSyntaxObject.age = 18;
    console.log('spreadSyntaxObject:', spreadSyntaxObject);
    console.log('copySpreadSyntaxObject update age to 18:', copySpreadSyntaxObject);

    // for string
    let str = 'sdtskjfdaiojasdklf'
    console.log(...str);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// arguments and rest oprator

// arguments (can't use in arrowFunction)
const argumentsBtn = () => {
    function argumentsFunction (a, b, c) {
        let argumentsArray = Array.from(arguments);
        console.log('arguments Array:', argumentsArray);
    
        argumentsArray.forEach((argument, index) => console.log('arguments item ' + (index + 1), argument));
    
        let sumArgumentsValue = 0;
        argumentsArray.forEach(argumnetItem => sumArgumentsValue += argumnetItem)
        console.log('sum of arguments value:', sumArgumentsValue);
    }
    argumentsFunction(10, 20, 50, 20, 6);
}

// rest oprator(for use in arrowFunction)
const restOpratorBtn = () => {
    const restOpratorFunction = (...args) => { // Rest parameter must be last 
        console.log('args array:', args);
    
        args.forEach((arg, index) => console.log('args item ' + (index + 1), arg))
    
        let sumArgsValue = 0
        args.forEach(arg => sumArgsValue += arg)
        console.log('sum of args value:', sumArgsValue);
    }
    restOpratorFunction(10, 20, 50, 20, 6)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Array Destructuring
const ArrayDestructuringBtn = () => {
    let userInformationDest = [1, 'Iran','Esfahan', 'Ali', 25, true, 4];
    let [userID, , , userName, userAge, userMarried = false] = userInformationDest;
    console.log('userID:', userID);
    console.log('userName:', userName);
    console.log('userAge:', userAge);
    console.log('userMarried:', userMarried);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Object Destructuring
const ObjectDestructuringBtn = () => {
    let userInformationDest = {id: 1, country: 'Iran', city: 'Esfahan', name: 'Ali', age: 25, isMarried: true, familyMember: 4};
    let {name: UserName, id, isMarried = false, age} = userInformationDest;
    console.log('id:', id);
    console.log('UserName:', UserName);
    console.log('age:', age);
    console.log('isMarried:', isMarried);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// template string (literal). use ${} for contact text or Math
const templateStringBtn = () => {
    let contactText = 'Test'
    let literalText = `
    This text is for : ${contactText}.
    2 + 2 : ${2 + 2} .
    Math.pow(2, 10): ${Math.pow(2, 10)} .
    `
    console.log(literalText.trim());
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "for of" loop. can use for interable data like: array, string, arguments, HTML collection, ... . object not a interable data.
const forOfLoopBtn = () => {
    let numbers = [1, 50, 70, 90, 5, 40, 6];
    for (let number of numbers) {
        console.log(number);
    }
    
    let str = 'Salam';
    for (let char of str) {
        console.log(char);
    }
    
    function forOfArguments ()  {
        for (let argument of arguments) {
            console.log(argument);
        }
    }
    forOfArguments('Mahdi', 'Mahdis', 'Mohammad');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "for in" loop. like "for of" but for objects.
const forInLoopBtn = () => {
    let object = {id: 1, name: 'Ali', age: 25}
    for (let property in object) {
        console.log(`user ${property}: ${object[property]}`);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// string padding: padStart, padEnd
const stringPadding = () => {
    let phonNumber = '937 008 7721'
    let phonNumberPadding = phonNumber.padStart(16, '+98 ')
    console.log('phonNumber:', phonNumber);
    console.log('phonNumberPadding:', phonNumberPadding);

    let userName = 'Mahdi'
    let userNamePadding = userName.padEnd(10, '-')
    console.log('userName:', userName);
    console.log('userNamePadding:', userNamePadding);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// numeric separator : separate digits with '_' .
const numericSeparatorBtn = () => {
    let computerPrice = 50_000_000
    let postalPrice = 75_000
    console.log("total price", computerPrice + postalPrice);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// && and ||
const andOrFunction = () => {
    let andOrBoolean = true;
    
    andOrBoolean && console.log('andOrBoolean. (&&)');
    !andOrBoolean && console.log('!andOrBoolean. (&&)');
    
    andOrBoolean || console.log('andOrBoolean. (||)');
    !andOrBoolean || console.log('!andOrBoolean. (||)');

    let newBoolean = andOrBoolean || false
    console.log(newBoolean);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// modules : export , import
// most write type="module" in the HTML file for Script Tag
// for exporting can write 'export' word before of things or write "export { 'things you want export', }"
// can export default with write "export default 'name'" and import this with write "import 'anyName' from 'address'"
// for importing write "import { 'things you want import' } from 'address'"
// for importing all of export things write "import * as 'name' from 'address'" and for use them write name.thingsName
import defaultExportLet from './modules/modules.js'
import * as allExportThings from './modules/modules.js'
import { modulesLet, modulesFunction as logFunctionFromModules } from './modules/modules.js'
const modulesFunctionBtn = () => {
    console.log(defaultExportLet);
    console.log(modulesLet);
    logFunctionFromModules('sendWord');
    console.log('import all:', allExportThings.modulesLet);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// type coercion: 1-implicit , 2-explicit
const typeCoercionBtn = () => {
    // implicit:
    console.log(Boolean(0 == '0'));
    // explicit
    console.log(Number("0"), typeof(Number("0")));
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 