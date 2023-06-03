let $ = document;
let body = $.body;
/* // dom
// get element by id
let h1Js = $.getElementById("js");
console.log(h1Js);
// get elements by class name
let listItems = $.getElementsByClassName("list-item");
console.log(listItems);
console.log(listItems[0]);
// get elements by tag name
let liElements = $.getElementsByTagName("li");
console.log(liElements);
console.log(liElements[0]);
// get element by querySelector
let firstListItem = $.querySelector(".list-item"); // css selector
console.log(firstListItem);
// get element by querySelectorAll
let allListItem = $.querySelectorAll(".list-item");
console.log(allListItem);
console.log(allListItem[0]); */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* // access to attribute "getAttribute" and "setAttribute"
let h1Js2 = $.getElementById("js");
h1Js2.setAttribute("align", "center");
console.log("align: " + (h1Js2.getAttribute("align")));
console.log(h1Js2); */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* // access to style of elements
let h1Js3 = $.getElementById("js");
h1Js3.style.color = "#0f8";
console.log(h1Js3.style.color);
h1Js3.style.fontWeight = "bold";
let listItems2 = $.getElementsByClassName("list-item");
listItems2[3].style.color = "red"; // can't style to a array. most be select one index */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* // access to content of html
// open and close tags : .innerHTML & .innerText & .textContent
let h1Js4 = $.getElementById("js");
console.log(h1Js4.innerHTML);
h1Js4.innerText = "Jssssssss";
console.log(h1Js4.textContent);
// form tags : .value
let input = $.getElementById("input");
input.value = "Jssssssssssss";
let selectBox = $.getElementById("select");
console.log(selectBox.value);
selectBox.value = "shiraz"; */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* // create element
let usernamePrompt = prompt("your username:");
let newDivElement = $.createElement('div');
newDivElement.setAttribute('id', 'usernamePrompt');
newDivElement.style.color = '#0f8';
newDivElement.innerHTML = usernamePrompt;
console.log(newDivElement); */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* // append the created element in the HTML
// append can add 'string' in html but appendChild jus can add a node HTML
// append can add more than 1 element but appendChild jus can add 1
// can't save append in let but appendchild can
let ulTag = $.querySelector('ul');
let newLiDownloads = $.createElement('li');
newLiDownloads.innerHTML = 'Downloads';
let newLiProducts = $.createElement('li');
newLiProducts.innerHTML = 'Products';
ulTag.append(newLiDownloads);
ulTag.appendChild(newLiProducts); */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onClick="" event and exercise ep 108: change pic with btn
const modePic = $.getElementById('mode-pic');
const modeBtn = $.getElementById('mode-btn');
modeBtn.addEventListener('click', function () {
    body.classList.toggle('dark');
    if (body.className.includes('dark')) {
        modePic.setAttribute('src', '../pictures/js/Light-Dark-Mode/moon.png');
        modeBtn.innerHTML = 'Dark Mode';
        localStorage.setItem('mode', 'dark');
    } else {
        modePic.setAttribute('src', '../pictures/js/Light-Dark-Mode/sun.png');
        modeBtn.innerHTML = 'Light Mode';
        localStorage.setItem('mode', 'light');
    }
})
if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark');
    modePic.setAttribute('src', '../pictures/js/Light-Dark-Mode/moon.png');
    modeFlag = false;
}
// exercise ep 109: check validation data with onclick
let usernameInput = $.getElementById('username');
let passwordInput = $.getElementById('password');
let modalMessage = $.getElementById('message');
function login () {
    let usernameValue = usernameInput.value;
    let passwordValue = passwordInput.value;
    if (usernameValue.length < 12 || passwordValue.length < 8) {
        modalMessage.style.color = 'red';
        modalMessage.style.backgroundColor = 'maroon';
        modalMessage.innerHTML = "Pleas enter the valid values!"
        modalMessage.style.display = 'inline';
    } else {
        modalMessage.style.color = 'lime';
        modalMessage.style.backgroundColor = 'darkgreen';
        modalMessage.innerHTML = "Your values are valid!"
        modalMessage.style.display = 'inline';
    }
    setTimeout(function () {
        modalMessage.style.display = 'none';
    }, 3000)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "onkeydown", "onkeypress" & "onkeyup" events
// first "onkeydown" then "onkeypress" & last "onkeyup"
// "onkeypress" don't do event for special keys(alt, ctrl, shift, backspace...)
function onkeyEvents () {
    console.log("type");
}
// exercise ep 111: check validation data with onkeyup
let usernameInput2 = $.getElementById('username2');
let passwordInput2 = $.getElementById('password2');
function onkeyUsernameLogin2 () {
    let usernameValue2 = usernameInput2.value;
    if (usernameValue2.length < 12) {
        $.getElementById('usernameCheck').style.color = 'red';
        $.getElementById('usernameCheck').innerHTML = '12 character or more';
        $.getElementById('usernameCheck').style.display = 'inline';
    } else {
        $.getElementById('usernameCheck').style.color = 'green';
        $.getElementById('usernameCheck').innerHTML = 'correct';
    }
}
function onkeyPasswordLogin2 () {
    let passwordValue2 = passwordInput2.value;
    if (passwordValue2.length < 8) {
        $.getElementById('passwordCheck').style.color = 'red';
        $.getElementById('passwordCheck').innerHTML = '8 character or more';
        $.getElementById('passwordCheck').style.display = 'inline';
    } else {
        $.getElementById('passwordCheck').style.color = 'green';
        $.getElementById('passwordCheck').innerHTML = 'correct';
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "onblur" and "onfocus" events
function onFocus () {
    console.log("focus");
}
function onBlur () {
    console.log("blur");
}
// exercise ep 113: check validation data with onblur
let usernameInput3 = $.getElementById('username3');
let passwordInput3 = $.getElementById('password3');
function blurUsernameLogin3 () {
    let usernameValue3 = usernameInput3.value;
    if (usernameValue3.length < 12) {
        $.getElementById('usernameCheckBlur').style.color = 'red';
        $.getElementById('usernameCheckBlur').innerHTML = '12 character or more';
        $.getElementById('usernameCheckBlur').style.display = 'inline';
    } else {
        $.getElementById('usernameCheckBlur').style.color = 'green';
        $.getElementById('usernameCheckBlur').innerHTML = 'correct';
        $.getElementById('usernameCheckBlur').style.display = 'inline';
    }
}
function blurPasswordLogin3 () {
    let passwordValue3 = passwordInput3.value;
    if (passwordValue3.length < 8) {
        $.getElementById('passwordCheckBlur').style.color = 'red';
        $.getElementById('passwordCheckBlur').innerHTML = '8 character or more';
        $.getElementById('passwordCheckBlur').style.display = 'inline';
    } else {
        $.getElementById('passwordCheckBlur').style.color = 'green';
        $.getElementById('passwordCheckBlur').innerHTML = 'correct';
        $.getElementById('passwordCheckBlur').style.display = 'inline';
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onDblClick="" event
function onDblClick () {
    alert("double clicked")
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// add event in js
let addEventBtn = $.getElementById('add-event-btn');
addEventBtn.addEventListener('click', function () {
    console.log('click internal function');
})
addEventBtn.addEventListener('click', clickJsFunction)
function clickJsFunction () {
    console.log('click external function');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class list method
let changeBtn = $.getElementById("change-btn");
changeBtn.addEventListener('click', function () {
    // changeBtn.setAttribute('class', 'blue');
    changeBtn.classList.add('blue');
    changeBtn.classList.remove('small');
    changeBtn.classList.toggle('backOrange');
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 117: change backgroundcolor to random color
let randomRed, randomGreen, randomBlue, finalRGB, changeFlag = false;
$.getElementById('random-back-color').addEventListener('click', function () {
    changeColorFunction();
    if (!changeFlag) {
        changeFlag = true;
        $.getElementById('random-back-color').innerHTML = "ON";
    } else {
        changeFlag = false;
        $.getElementById('random-back-color').innerHTML = "OFF";
    }
})
function changeColorFunction () {
    let changeColor = setInterval(function () {
        randomRed = Math.floor(Math.random() * 256);
        randomGreen = Math.floor(Math.random() * 256);
        randomBlue = Math.floor(Math.random() * 256);
        finalRGB = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
        if (changeFlag) {
            $.body.style.backgroundColor = finalRGB;
        } else {
            clearInterval(changeColor);
        }
    }, 5000)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onchange event
let selectOnchange = $.getElementById('select-onchange');
selectOnchange.addEventListener('change', function () {
    console.log(selectOnchange.value + " selected");
})
// exercise ep 120: select country then select city
let selectcountry = $.getElementById('select-country');
let selectCity = $.getElementById('select-city');
let concit = {
    Iran:['Tehran', 'Isfahan'],
    USA:['California', 'Newyork'],
    Iraq:['Karbala', 'Najaf']
}
selectcountry.addEventListener('change', function () {
    selectCity.innerHTML = "<option value=\"\" hidden selected>select city</option>"
    concit[selectcountry.value].forEach(function (city) {
        selectCity.innerHTML += "<option value=\"" + city + "\">" + city + "</option>";
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 122: weather. cities: tehran, esfahan & shiraz
let backgroundPic = [
    'url(../pictures/js/Backgrounds/back\\ 1.jpg)',
    'url(../pictures/js/Backgrounds/back\\ 2.jpg)',
    'url(../pictures/js/Backgrounds/back\\ 3.jpg)',
    'url(../pictures/js/Backgrounds/back\\ 4.jpg)',
    'url(../pictures/js/Backgrounds/back\\ 5.jpg)',
    'url(../pictures/js/Backgrounds/back\\ 6.jpg)',
    'url(../pictures/js/Backgrounds/back\\ 7.jpg)',
    'url(../pictures/js/Backgrounds/back\\ 8.jpg)',
    'url(../pictures/js/Backgrounds/back\\ 9.jpg)',
    'url(../pictures/js/Backgrounds/back\\ 10.jpg)'
]
function randomPic () {
    let randomIndexPic = Math.floor(Math.random() * 10);
    $.getElementById('weather-box').style.backgroundImage = backgroundPic[randomIndexPic];
}
randomPic();
// way 2
/* let cities = [
    {city: 'tehran', temp: 43, des: 'Sunny', humidity: 26, windSpeed:3.2},
    {city: 'esfahan', temp: 34, des: 'Rainy', humidity: 30, windSpeed:3.5},
    {city: 'shiraz', temp: 38, des: 'Windy', humidity: 27, windSpeed:4.0}
]
$.getElementById('search-weather').addEventListener('click', function () {
    randomPic();
    let searchCity = $.getElementById('search-city-weather').value;
    let findWeather = cities.find(function (weather) {
        return weather.city === searchCity;
    })
    if (findWeather) {
        $.querySelector('.city').innerHTML = "Weather in " + findWeather.city;
        $.querySelector('.temp').innerHTML = findWeather.temp + "C";
        $.querySelector('.des').innerHTML = findWeather.des;
        $.querySelector('.humidity').innerHTML = "Humidity: " + findWeather.humidity + "%";
        $.querySelector('.wind-speed').innerHTML = "Wind Speed: " + findWeather.windSpeed + " km/h";
        $.querySelector('.weather').style.display = 'block';
        $.querySelector('.error').style.display = "none";
        $.querySelector('.weather').classList.remove('loading');
    } else {
        $.querySelector('.weather').style.display = 'none';
        $.querySelector('.error').style.display = "block";
    }
}) */
// way 1
let cities2 = {
    tehran: {city: 'Tehran', temp: 43, des: 'Sunny', humidity: 26, windSpeed:3.2},
    shiraz: {city: 'Shiraz', temp: 38, des: 'Windy', humidity: 27, windSpeed:4.0},
    esfahan: {city: 'Esfahan', temp: 34, des: 'Rainy', humidity: 30, windSpeed:3.5}
}
$.getElementById('search-weather').addEventListener('click', function () {
    randomPic();
    let searchCity2 = $.getElementById("search-city-weather").value.toLowerCase();
    let findWeather2 = cities2[searchCity2];
    if (findWeather2) {
        $.querySelector('.city').innerHTML = "Weather in " + findWeather2.city;
        $.querySelector('.temp').innerHTML = findWeather2.temp + "C";
        $.querySelector('.des').innerHTML = findWeather2.des;
        $.querySelector('.humidity').innerHTML = "Humidity: " + findWeather2.humidity + "%";
        $.querySelector('.wind-speed').innerHTML = "Wind Speed: " + findWeather2.windSpeed + " km/h";
        $.querySelector('.weather').style.display = 'block';
        $.querySelector('.error').style.display = "none";
        $.querySelector('.weather').classList.remove('loading');
    } else {
        $.querySelector('.weather').style.display = 'none';
        $.querySelector('.error').style.display = "block";
    }
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 127: convert C to F and F to C
let converterHeader = $.querySelector('.converter-header');
let converterResult = $.querySelector('.converter-result');
let converterInput = $.querySelector('.converter-input');
$.querySelector('.converter-convert').addEventListener('click', function () {
    if (converterInput.value == "") {
        converterResult.innerHTML = "empty! write correct value";
        converterResult.style.color = "#ffae00";
    } else if (isNaN(+converterInput.value)) {
        converterResult.innerHTML = "wrong value! enter a number";
        converterResult.style.color = "#ffae00";
    } else if (converterInput.getAttribute('placeholder') == 'C') {
        converterResult.innerHTML = (converterInput.value * 9 / 5) + 32 + " Fahrenheit";
        converterResult.style.color = "wheat";
    } else {
        converterResult.innerHTML = ((converterInput.value - 32) / 9) * 5 + " Celsius";
        converterResult.style.color = "wheat";
    }
});
$.querySelector('.converter-reset').addEventListener('click', function () {
    converterInput.value = "";
    converterResult.innerHTML = "";
});
$.querySelector('.converter-change').addEventListener('click', function () {
    if (converterInput.getAttribute('placeholder') == 'C') {
        converterHeader.innerHTML = "F to C converter";
        converterInput.setAttribute('placeholder', 'F');
        $.title = "F to C";
    } else {
        converterHeader.innerHTML = "C to F converter";
        converterInput.setAttribute('placeholder', 'C');
        $.title = "C to F";
    }
    converterInput.value = "";
    converterResult.innerHTML = "";
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* // each HTML element is an object.
let spanElem = $.getElementById('spanElem');
// we can have access to attribute of elements with dot '.' like properties of JS objects
console.log("get class with '.getAttribute' : " + spanElem.getAttribute('class')); // spanElemClass
console.log("get class with dot '.' : " + spanElem.className); // spanElemClass
// we can't have access to custom attribute with dot '.' but with ".getAttribute()" we can
console.log("\nget customAttribute with '.getAttribute' : " + spanElem.getAttribute('customAttribute')); // custom attribute
console.log("get customAttribute with dot '.' : " + spanElem.customAttribute); // undefined
// we can set attribute with 'setAttribute' and have access to this with 'getAttribute' but we can't get it with dot '.'
spanElem.setAttribute('customAttribute2', 'custom attribute 2');
console.log("\nset and get with 'setAttribute' and 'getAttribute' : " + spanElem.getAttribute('customAttribute2')); // custom attribute 2
console.log("set with 'setAttribute' and get with dot '.' : " + spanElem.customAttribute2); // undefined
// we can set attribute for elements with dot '.' like properties for objects and have access to them with dot '.' but can't have access with ".getAttribute()"
spanElem.customAttribute3 = 'custom attribute 3';
console.log("\nset with dot '.' and get with 'getAttribute' : " + spanElem.getAttribute('customAttribute3')); // null
console.log("set and get with dot '.' : " + spanElem.customAttribute3); // custom attribute 3 */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* // 'hasAttribute' and 'removeAttribute'
let spanElem2 = $.getElementById('spanElem2');
let hasAttribute = spanElem2.hasAttribute('class');
console.log(hasAttribute); // boolean
let removeAttribute = spanElem2.removeAttribute('class');
console.log(removeAttribute); // undefined : this is a void function
console.log(spanElem2.hasAttribute('class')); // false : class removed */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// we can use dot '.' for add event like 'addEventListener()'
let btnElem = $.getElementById('btnElem');
function clickBtnElem () {
    console.log('click');
}
// 1: set attribute onclick for element in HTML
// 2:
btnElem.onclick = clickBtnElem;
// 3:
btnElem.onclick = function () {
    console.log('click');
}
// 4: 'addEventListener()' is the standard way!
btnElem.addEventListener('click', clickBtnElem);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onsubmit in forms
let testFormSubmit = $.getElementById('test-form-submit');
testFormSubmit.addEventListener('submit', function () {alert('submit\nok to continue...\n(send the form)')});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// work with 'event'
let btnEvent = $.getElementById('btnEvent');
let inpEvent = $.getElementById('inpEvent');
btnEvent.addEventListener('click', function (event) {
    console.log(event);
})
inpEvent.addEventListener('keypress', function (event) {
    console.log(event);
    if (event.keyCode === 13) {
        console.log("Enter press");
    }
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// work with 'preventDefault()' : cancel the default moves. if object cancelable is true we can cancel it
let formEvent = $.getElementById('formEvent');
let inpEvent2 = $.getElementById('inpEvent2');
let linkEvent = $.getElementById('linkEvent');
formEvent.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("event.cancelable: " + event.cancelable);
    console.log(event);
})
inpEvent2.addEventListener('keydown', function (event) {
    event.preventDefault();
    console.log("event.cancelable: " + event.cancelable);
    console.log(event);
})
linkEvent.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("event.cancelable: " + event.cancelable);
    console.log(event);
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 137: keydown and give result
let keyInformations = $.getElementById('key-informations');
let keyAcci = $.getElementById('key-acci');
let eventKey = $.getElementById('event.key');
let eventLocation = $.getElementById('event.location');
let eventWhich = $.getElementById('event.which');
let eventCode = $.getElementById('event.code');
$.body.addEventListener('keydown', function (event) {
    keyInformations.style.display = 'inline-block';
    keyAcci.innerHTML = event.keyCode;
    eventKey.innerHTML = event.key;
    eventLocation.innerHTML = event.location;
    eventWhich.innerHTML = event.which;
    eventCode.innerHTML = event.code;
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nodes
let btnNode = $.getElementById('btn-node');
btnNode.addEventListener('click', function () {
    console.log("node name : " + btnNode.nodeName);
    console.log("node type : " + btnNode.nodeType);
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// work with parent and child in js
let divParent = $.getElementById('div-parent');
let buttonChild1 = $.getElementById('button-child1');
let buttonChild2 = $.getElementById('button-child2');
let buttonChild3 = $.getElementById('button-child3');
let buttonChild4 = $.getElementById('button-child4');
let buttonChild5 = $.getElementById('button-child5');
let buttonChild6 = $.getElementById('button-child6');
let buttonChild7 = $.getElementById('button-child7');
let buttonChild8 = $.getElementById('button-child8');
let buttonChild9 = $.getElementById('button-child9');
let buttonChild10 = $.getElementById('button-child10');
let buttonChild11 = $.getElementById('button-child11');
let buttonChild12 = $.getElementById('button-child12');
let buttonChild13 = $.getElementById('button-child13');
let buttonChild14 = $.getElementById('button-child14');
buttonChild1.addEventListener('click', function () {
    console.log("buttonChild1.parentNode: ");
    console.log(buttonChild1.parentNode);
})
buttonChild2.addEventListener('click', function () {
    console.log("buttonChild2.parentElement: ");
    console.log(buttonChild2.parentElement);
})
buttonChild3.addEventListener('click', function () {
    console.log("buttonChild3.previousElementSibling * 2: "); // jst element
    console.log(buttonChild3.previousElementSibling.previousElementSibling);
})
buttonChild4.addEventListener('click', function () {
    console.log("buttonChild4.nextElementSibling * 2: "); // jst element
    console.log(buttonChild4.nextElementSibling.nextElementSibling);
})
buttonChild5.addEventListener('click', function () {
    console.log("buttonChild5.previousSibling: "); // all nodes: 'enter', 'elements' ,...
    console.log(buttonChild5.previousSibling);
})
buttonChild6.addEventListener('click', function () {
    console.log("buttonChild6.nextSibling: "); // all nodes: 'enter', 'elements' ,...
    console.log(buttonChild6.nextSibling);
})
buttonChild7.addEventListener('click', function () {
    console.log("divParent.childElementCount: ");
    console.log(divParent.childElementCount);
})
buttonChild8.addEventListener('click', function () {
    console.log("divParent.children[2]: ");
    console.log(divParent.children[2]);
})
buttonChild9.addEventListener('click', function () {
    console.log("divParent.childNodes: ");
    console.log(divParent.childNodes);
})
buttonChild10.addEventListener('click', function () {
    console.log("divParent.hasChildNodes: ");
    console.log(divParent.hasChildNodes());
})
buttonChild11.addEventListener('click', function () {
    console.log("divParent.firstChild: " + divParent.firstChild);
    console.log(divParent.firstChild);
})
buttonChild12.addEventListener('click', function () {
    console.log("divParent.lastChild: ");
    console.log(divParent.lastChild);
})
buttonChild13.addEventListener('click', function () {
    console.log("divParent.firstElementChild: ");
    console.log(divParent.firstElementChild);
})
buttonChild14.addEventListener('click', function () {
    console.log("divParent.lastElementChild: ");
    console.log(divParent.lastElementChild);
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// debug exercise ep 142: show password
 // Functions for select elems with id & class
 function _id(id_name) {
   return $.getElementById(id_name);
 }

 function _class(class_name) {
   return $.getElementsByClassName(class_name);
 }

 // Select Elems
 var togglePassword = _class("toggle-password");
 var passwordField = _id("password-field");

 // Fire click event on eye icon
 togglePassword[0].addEventListener("click", function () {
   if (passwordField.type == "text") {
     passwordField.type = "password";
     togglePassword[0].classList.remove("active");
   } else {
     passwordField.type = "text";
     togglePassword[0].classList.add("active");
   }
 })
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// remove element in HTML with js
let h1ElemRemove = $.getElementById('removeElement');
let buttonRemove = $.getElementById('removeH1');
buttonRemove.addEventListener('click', function () {
    h1ElemRemove.remove();
})
let removeLiArray = $.querySelectorAll('.removeLi');
removeLiArray.forEach(function (li) {
    li.addEventListener('click', function (event) {
        event.target.parentElement.remove();
    })
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 144: todo list
let inputTodo = $.querySelector('.form-control1');
let ulTodo = $.querySelector('.todos');
let formInputTodo = $.querySelector('.add');
let deleteTodo = $.querySelectorAll('.delete');
formInputTodo.addEventListener('submit', function (event) {
    event.preventDefault();
})
inputTodo.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        if (inputTodo.value) {
            let newLiTodo = $.createElement('li');
            let newSpanTodo = $.createElement('span');
            let newI = $.createElement('i');
            newLiTodo.className = "list-group-item d-flex justify-content-between align-items-center";
            newI.className = "fa fa-trash-o delete";
            newLiTodo.appendChild(newSpanTodo);
            newLiTodo.appendChild(newI);
            ulTodo.appendChild(newLiTodo);
            newSpanTodo.innerHTML = inputTodo.value.trim();
            inputTodo.value = "";
            deleteTodo = $.querySelectorAll('.delete');
            deleteTodo.forEach(function (del) {
                del.addEventListener('click', function () {
                    del.parentElement.remove();
                })
            })
        } else {
            alert("empty value!")
        }
    }
})
deleteTodo.forEach(function (del) {
    del.addEventListener('click', function () {
        del.parentElement.remove();
    })
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// right click control
// for block the right click: <body oncontextmenu="return false"></body>
let btnRightClick = $.getElementById('rightClick');
btnRightClick.addEventListener('click', function () {
    console.log('left click');
})
btnRightClick.addEventListener('contextmenu', function () {
    console.log('right click');
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// cut, copy, paste event
let textareaBlockCCP = $.getElementById('blockCCP');
textareaBlockCCP.addEventListener('cut', function (event) {
    event.preventDefault();
    console.log('cut');    
})
textareaBlockCCP.addEventListener('copy', function (event) {
    event.preventDefault();
    console.log('copy');    
})
textareaBlockCCP.addEventListener('paste', function (event) {
    event.preventDefault();
    console.log('paste');    
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 150: script for right click menu
let rightClickMenu = $.getElementById('contextMenu');
body.addEventListener('contextmenu', function (event) {
    // event.preventDefault(); // for get inspect
    rightClickMenu.style.left = (event.pageX + 1) + 'px'; // + 1 for get inspect
    rightClickMenu.style.top = (event.pageY + 1) + 'px'; // + 1 for get inspect
    rightClickMenu.style.display = 'block';
})
body.addEventListener('keydown', function (event) {
    if (event.key == 'Escape') {
        rightClickMenu.style.display = 'none';
    }
})
body.addEventListener('click', function (event) {
    rightClickMenu.style.display = 'none';
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onload and DOMContentLoaded event.
// onload for when all of page load (also css, js ...)
// DOMContentLoaded when just document load (not css, js ...)
let imageOnload = $.getElementById('imageOnload');
imageOnload.addEventListener('load', function () {
    console.log('loaded');
})
/* $.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded');
}) */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 155: hide the loader when all of page load.
let loader = $.querySelector('.loader');
window.addEventListener('load', function () {
    // loader.classList.add('hidden');
    // or
    loader.className += ' hidden';
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onunload and onbeforeunload
window.addEventListener('unload', function () {
    console.log('leave');
})
window.addEventListener('beforeunload', function () {
    console.log('leaveeeeeeee');
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// remove event
const setEventForRemove = $.getElementById('setEventForRemove');
const removeSetEvent = $.getElementById('removeSetEvent');
function clickLog() {
    console.log('clilk');
}
setEventForRemove.addEventListener('click', clickLog)
removeSetEvent.addEventListener('click', function () {
    setEventForRemove.removeEventListener('click', clickLog);
    console.log('removed');
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// remove event
const textareaOnselect = $.getElementById('onselectEvent');
textareaOnselect.addEventListener('select', function (event) {
    console.log('selected');
    console.log(event);
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// touch events: start, move, end, cansel
const touchEvents = $.getElementById('touchEvents');
touchEvents.addEventListener('touchstart', function (event) {
    console.log('start touch');
    console.log(event);
})
touchEvents.addEventListener('touchmove', function (event) {
    console.log('move touch');
    // console.log(event);
})
touchEvents.addEventListener('touchend', function (event) {
    console.log('end touch');
    console.log(event);
})
touchEvents.addEventListener('touchcancel', function (event) {
    console.log('touch cancel');
    console.log(event);
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 162: show length
const lengthInput = $.getElementById('showLength');
const lengthSpan = $.querySelector('.counter');
const inputMaxLength = lengthInput.getAttribute('maxlength');
lengthInput.addEventListener('keyup', function () {
    lengthSpan.innerHTML =  +inputMaxLength - +(lengthInput.value.length);
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 164: show modal and blur background
const sectionModal = $.querySelector('.section-modal');
const modalBtn = $.getElementById('modalBtn');
const modalParagraph = $.querySelector('.modal-parent');
const spanXModal = $.querySelector('.X');
modalBtn.addEventListener('click', function () {
    modalParagraph.style.display = 'block';
    sectionModal.style.filter = 'blur(10px)';
})
spanXModal.addEventListener('click', function () {
    modalParagraph.style.display = 'none';
    sectionModal.style.filter = 'blur(0px)';
})
$.addEventListener('keyup', function (event) {
    if (event.key === 'Escape') {
        modalParagraph.style.display = 'none';
        sectionModal.style.filter = 'blur(0px)';
        modalBtn.blur();    
    }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onscroll event
const scrollDiv = $.querySelector('.scroll');
scrollDiv.addEventListener('scroll', function () {
    console.log(scrollDiv.scrollTop, scrollDiv.scrollLeft);
})
// another way
scrollDiv.onscroll = function (event) {
    console.log(event);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 171: fixed navbar to scroll
const fixedNavbar = $.getElementById('mainNav');
const fixedNavLogo = $.querySelector('.nav-logo');
$.addEventListener('load', function () {
    if ($.documentElement.scrollTop > 0) {
        fixedNavbar.classList.add('bg-change', 'txt-color-change');
        fixedNavLogo.style.height = '64px';
    }
})
$.addEventListener('scroll', function () {
    if ($.documentElement.scrollTop > 0) {
        fixedNavbar.classList.add('bg-change', 'txt-color-change');
        fixedNavLogo.style.height = '64px';
    } else {
        fixedNavbar.classList.remove('bg-change', 'txt-color-change');
        fixedNavLogo.style.height = '84px';
    }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// scrollTo and scrollBy methods
const goUpBtn = $.getElementById('go-up');
const go100Btn = $.getElementById('go-100');
$.addEventListener('scroll', function () {
    if ($.documentElement.scrollTop > 0) {
        goUpBtn.classList.add('go-fixed', 'go-up-fixed');
        go100Btn.classList.add('go-fixed', 'go-100-fixed');
    } else {
        goUpBtn.classList.remove('go-fixed', 'go-up-fixed');
    }
})
goUpBtn.addEventListener('click', function () {
    $.documentElement.scrollTo(0, 0);
})
go100Btn.addEventListener('click', function () {
    $.documentElement.scrollBy(0, 100);
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// data set - dataSet
const btnAli = $.getElementById('data-set-Ali');
const btnMahdi = $.getElementById('data-set-Mahdi');
btnAli.addEventListener('click', function (event) {
    console.log(event.target.dataset.id, event.target.dataset.name);
    console.log(event.target.dataset);
})
btnMahdi.addEventListener('click', function (event) {
    console.log(event.target.dataset.id, event.target.dataset.name);
    console.log(event.target.dataset);
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// media methods and properties
const audio = $.getElementById('audio-control');
const audioPreviousBtn = $.getElementById('audio-previous');
const audio_5 = $.getElementById('audio-5');
const audioPlayBtn = $.getElementById('audio-play');
const audioPauseBtn = $.getElementById('audio-pause');
const audioDurationBtn = $.getElementById('audio-duration');
const audioRate1xBtn = $.getElementById('audio-rate-1x');
const audioRate2xBtn = $.getElementById('audio-rate-2x');
const audioNextBtn = $.getElementById('audio-next');
const audioPlus5 = $.getElementById('audio+5');
const audioCurrentTime = $.getElementById('audio-currentTime');
let audioSrc = [
    '../audio/Nightingale.mp3',
    '../audio/One Man\'s Dream      Acropolis.mp3'
]
let audioSrcIndex = 0;
audioPreviousBtn.addEventListener('click', function () {
    audioSrcIndex--;
    if (audioSrcIndex < 0) {
        audioSrcIndex = audioSrc.length - 1;
    }
    audio.setAttribute('src', audioSrc[audioSrcIndex]);
    audioPlayF();
    audioDurationBtn.innerHTML = "click to show Duration";
    console.log(audioSrc[audioSrcIndex]);
})
audio_5.addEventListener('click', function () {
    audio.currentTime = Math.floor(audio.currentTime) - 5;
})
function audioPlayF() {
    audio.play();
    console.log('play');
}
audioPlayBtn.addEventListener('click', audioPlayF)
audioPauseBtn.addEventListener('click', function () {
    audio.pause();
    console.log('pause');
})
audioRate1xBtn.addEventListener('click', function () {
    audio.playbackRate = 1;
    console.log('playbackRate 1X');
})
audioRate2xBtn.addEventListener('click', function () {
    audio.playbackRate = 2;
    console.log('playbackRate 2X');
})
audioDurationBtn.addEventListener('click', function () {
    audioDurationBtn.innerHTML = Math.floor(audio.duration / 60) + " minute";
})
audioPlus5.addEventListener('click', function () {
    audio.currentTime = Math.floor(audio.currentTime) + 5;
})
audioNextBtn.addEventListener('click', function () {
    audioSrcIndex++;
    if (audioSrcIndex > audioSrc.length - 1) {
        audioSrcIndex = 0;
    }
    audio.setAttribute('src', audioSrc[audioSrcIndex]);
    audioPlayF();
    audioDurationBtn.innerHTML = "click to show Duration";
    console.log(audioSrc[audioSrcIndex]);
})
setInterval(function () {
    audioCurrentTime.innerHTML = Math.floor(audio.currentTime) + " seconds"
}, 1000)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Drag AND Drop events
// events for Drag : ondragstart, ondrag, ondragend
// events for Drop : ondragenter, ondrogover, ondragleave, ondrop
const h1sDrag = $.querySelectorAll('.drag');
const divDrop = $.querySelector('.drop');
// first most be set  draggable="true" for elements to drag
h1sDrag.forEach(function (h1Drag) {
    h1Drag.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('h1ID', event.target.id);
    })
})
divDrop.addEventListener('dragover', function (event) {
    event.preventDefault();
})
divDrop.addEventListener('drop', function (event) {
    divDrop.append($.getElementById(event.dataTransfer.getData('h1ID')));
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 184: todo drag and drop
const noStatus = $.getElementById('no_status');
const statusC = $.querySelectorAll('.status');
const addBtn = $.getElementById('add_btn');
const modal = $.getElementById('todo_form');
const overlay = $.getElementById('overlay');
const clsoeModal = $.querySelector('.close-modal');
const todoInput = $.getElementById('todo_input');
const todoSubmit = $.getElementById('todo_submit');
let todos = $.querySelectorAll('.todo');
let CountID = 0;
addBtn.addEventListener('click', function () {
    modal.classList.add('active');
    overlay.classList.add('active');
})
function clsoeModalFunction() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}
clsoeModal.addEventListener('click', clsoeModalFunction);
todoSubmit.addEventListener('click', function () {
    if (todoInput.value) {
        const newTodoDiv = $.createElement('div');
        newTodoDiv.className = 'todo';
        newTodoDiv.id = 'todo-' + (CountID + 1);
        CountID++;
        newTodoDiv.draggable = 'true';
        newTodoDiv.innerHTML = todoInput.value;
        const newSpanTodo = $.createElement('span');
        newSpanTodo.className = 'close';
        newSpanTodo.innerHTML = '&times;';
        newTodoDiv.appendChild(newSpanTodo);
        noStatus.appendChild(newTodoDiv);
        todoInput.value = '';
        clsoeModalFunction();
        const closeTodos = $.querySelectorAll('.close');
        closeTodos.forEach(function (closeBtn) {
            closeBtn.addEventListener('click', function () {
                closeBtn.parentElement.remove()
            })
        })
        todos = $.querySelectorAll('.todo');
        todos.forEach(function(todo) {
            todo.addEventListener('dragstart', function (event) {
                event.dataTransfer.setData('todoID', event.target.id);
            })
        })
    }
})
statusC.forEach(function(status) {
    status.addEventListener('dragover', function (event) {
        event.preventDefault();
        status.style.border = '1px dashed #ccc';
    })
    status.addEventListener('dragleave', function () {
        status.style.border = 'none';
    })
    status.addEventListener('drop', function(event) {
        status.append($.getElementById(event.dataTransfer.getData('todoID')))
        status.style.border = 'none';
    })
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// local storage
const setItemLocalStorage = $.getElementById('setItemLocalStorage');
const replaceItemLocalStorage = $.getElementById('replaceItemLocalStorage');
const getItemLocalStorage = $.getElementById('getItemLocalStorage');
const clearLocalStorage = $.getElementById('clearLocalStorage');
setItemLocalStorage.addEventListener('click', function () {
    localStorage.setItem('ID', 4857);
})
replaceItemLocalStorage.addEventListener('click', function () {
    localStorage.setItem('ID', 7584);
})
getItemLocalStorage.addEventListener('click', function () {
    let ID = localStorage.getItem('ID');
    console.log(ID);
})
clearLocalStorage.addEventListener('click', function () {
    localStorage.clear();
})
// for set object in local storage use JSON.stringify()
// for get object in local storage use JSON.parse()
const setObjectLocalStorage = $.getElementById('setObjectLocalStorage');
const getObjectLocalStorage = $.getElementById('getObjectLocalStorage');
let objectLocalStorage = [
    {ID: 12, name: 'Ali', age: 25},
    {ID: 14, name: 'MMD', age: 24}
]
setObjectLocalStorage.addEventListener('click', function () {
    localStorage.setItem('objectLS', JSON.stringify(objectLocalStorage))
})
getObjectLocalStorage.addEventListener('click', function () {
    let object = JSON.parse(localStorage.getItem('objectLS'));
    console.log(object);
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// animation events in js: animationstart, animationiteration, animationend
const setAnimBtn = $.getElementById('animationBtn');
const showAnimDiv = $.getElementById('animationDiv');
const logAnimSpn = $.getElementById('animationSpn');
let animationCounter = 0;
setAnimBtn.addEventListener('click', function () {
    showAnimDiv.style.animation = 'borderAnimation 5s 3';
})
showAnimDiv.addEventListener('animationstart', function () {
    console.log('animation start');
    showAnimDiv.innerHTML = 'animation start';
    logAnimSpn.innerHTML = 'animation done : ' + (animationCounter + 1);
})
showAnimDiv.addEventListener('animationiteration', function () {
    console.log('animation repeat');
    showAnimDiv.innerHTML = 'animation <strong>repeat</strong> for ' + (animationCounter + 1) + ' times';
    animationCounter++;
    logAnimSpn.innerHTML = 'animation done : ' + (animationCounter + 1);
})
showAnimDiv.addEventListener('animationend', function () {
    console.log('animation end');
    showAnimDiv.innerHTML = 'animation end<br>total of show animation is ' + (animationCounter + 1) + ' times';
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 195: change brightness with change range
const brightnessRange = $.getElementById('range');
const brightnessBody = $.querySelector('.filter-container');
brightnessRange.addEventListener('input', function () {
    brightnessBody.style.filter = 'brightness('+ brightnessRange.value + '%)';
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// get all styles of elements with getComputedStyle()
const divStyles = $.getElementById('divStyles');
let allStylesOfDiv = getComputedStyle(divStyles);
let heightStylesOfDiv = getComputedStyle(divStyles).getPropertyValue('height');
function styleFunction() {
    console.log('element.style.fontSize: ' + divStyles.style.fontSize + ' (just for inline styles)');
    console.log('allStylesOfDiv = getComputedStyle(element)\nallStylesOfDiv.width: ' + allStylesOfDiv.width);
    console.log('getComputedStyle(element).getPropertyValue(\'height\'): ' + heightStylesOfDiv);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// set styles with cssText
const takeStyleCssText = $.getElementById('takeStyleCssText');
function setStyleCssText() {
    takeStyleCssText.style.cssText = "color: orange; background-color: darkBlue; font-size: 36px;";
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// try and catch
const showErrorP = $.getElementById('showErrorP');
function takeError() {
    try {
        console.log(X);
    } catch (err) {
        showErrorP.innerHTML += 'error.name: ' + err.name + ' | error.message: ' + err.message;
    }
}
// ---------
const inputTestError = $.getElementById('inputTestError');
const checkLengthP = $.getElementById('checkLengthP');
function checkLength() {
    try { // try to do the codes
        if (inputTestError.value.length < 8) {
            throw 'check : Lower than 8 character'
        } else if (inputTestError.value.length === 8) {
            throw 'check : 8 character'
        } else {
            throw 'check : Higher than 8 character'
        }
    } catch (err) {
        checkLengthP.innerHTML = err
    } finally { // after try and catch finally work anyway
        inputTestError.value = ''
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 200: image slider change with src
const prev = $.querySelector(".prev");
const next = $.querySelector(".next");
let imgSlider = $.querySelector(".img-slider");
let slideIndex = 0;
let slidePics = [
    '../pictures/js/Backgrounds/back 4.jpg',
    '../pictures/js/Backgrounds/back 6.jpg',
    '../pictures/js/Backgrounds/back 8.jpg',
    '../pictures/js/Backgrounds/back 9.jpg'
]
let nextSlideTimer = setInterval(nextImageSlide, 5000)
function nextImageSlide() {
    slideIndex++;
    if (slideIndex >= slidePics.length) {
        slideIndex = 0;
    }
    imgSlider.setAttribute('src', slidePics[slideIndex]);
    clearInterval(nextSlideTimer)
    nextSlideTimer = setInterval(nextImageSlide, 5000)
}
function prevImageSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slidePics.length - 1;
    }
    imgSlider.setAttribute('src', slidePics[slideIndex]);
    clearInterval(nextSlideTimer)
    nextSlideTimer = setInterval(nextImageSlide, 5000)
}
next.addEventListener('click', nextImageSlide)
prev.addEventListener('click', prevImageSlide)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 202: BMI calculator
const bmiWeight = $.getElementById('weight');
const bmiHeight = $.getElementById('height');
const bmiSpanWeight = $.getElementById('weight-val');
const bmiSpanHeight = $.getElementById('height-val');
const bmiResult = $.getElementById('bmi-result');
const bmiCategory = $.getElementById('bmi-category');
function BMIcalculator() {
    let bmiResultCalculate = bmiWeight.value / (Math.pow(bmiHeight.value / 100, 2));
    bmiResultCalculate = bmiResultCalculate.toFixed(1);
    bmiSpanWeight.innerHTML = bmiWeight.value + ' kg';
    bmiSpanHeight.innerHTML = bmiHeight.value + ' cm';
    bmiResult.innerHTML = bmiResultCalculate;
    if (bmiResultCalculate < 18.5) {
        bmiResult.style.color = 'gold';
        bmiCategory.innerHTML = 'underWeight';
    } else if (bmiResultCalculate >= 18.5 && bmiResultCalculate < 25) {
        bmiResult.style.color = 'limeGreen';
        bmiCategory.innerHTML = 'Normal';
    } else if (bmiResultCalculate >= 25 && bmiResultCalculate < 30) {
        bmiResult.style.color = 'orange';
        bmiCategory.innerHTML = 'overWeight';
    } else {
        bmiResult.style.color = 'red';
        bmiCategory.innerHTML = 'Obese';
    }
}
bmiWeight.addEventListener('input', BMIcalculator);
bmiHeight.addEventListener('input', BMIcalculator);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// set and get css variables in js
const setCssVarColor = $.getElementById('set-css-var-color');
setCssVarColor.addEventListener('click', function () {
    $.documentElement.style.setProperty('--var-color', 'green');
    console.log($.documentElement.style.getPropertyValue('--var-color'));
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// date object
function dateObject () {
    let nowDate = new Date();
    console.log('new Date()                 =   ' + nowDate);
    console.log('getFullYear()              =   ' + nowDate.getFullYear());
    console.log('getMonth() 0-11            =   ' + nowDate.getMonth());
    console.log('getDate() 1-31             =   ' + nowDate.getDate());
    console.log('getHours() 0-23            =   ' + nowDate.getHours());
    console.log('getMinutes() 0-59          =   ' + nowDate.getMinutes());
    console.log('getSeconds() 0-59          =   ' + nowDate.getSeconds());
    console.log('getMilliseconds() 0-999    =   ' + nowDate.getMilliseconds());
    console.log('getDay() 0-6               =   ' + nowDate.getDay());
    // console.log('getTime()' + nowDate.getTime());
    // console.log('now()' + nowDate.now());
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 215: Digital clock
const hourElement = $.getElementById('hour');
const minuteElement = $.getElementById('minute');
const secondsElement = $.getElementById('seconds');
setInterval(function () {
    let Time = new Date();
    let Hour = Time.getHours()
    let Minutes = Time.getMinutes()
    let Seconds = Time.getSeconds()
    if (Hour < 10)
        Hour = '0' + Hour;
    if (Minutes < 10)
        Minutes = '0' + Minutes;
    if (Seconds < 10)
        Seconds = '0' + Seconds;
    hourElement.innerHTML = Hour;
    minuteElement.innerHTML = Minutes;
    secondsElement.innerHTML = Seconds;
}, 1000);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 217: Text Generator
const dummyText = [
    'Sweet roll tiramisu sugar plum halvah cupcake topping wafer tootsie roll. Caramels croissant chocolate cake cotton candy. Jelly chocolate cake macaroon brownie pastry gummies cheesecake. Gingerbread pie croissant sugar plum oat cake tart tootsie roll. Chupa chups cake wafer danish. Biscuit donut candy canes gummies candy topping marshmallow jujubes. Chocolate cake cupcake topping. Chupa chups soufflé candy canes pudding brownie gummi bears. Dessert cotton candy jelly oat cake sweet roll cookie macaroon sweet roll. Jelly-o icing halvah.',
    'Sugar plum gummies cupcake gingerbread sweet. Pastry topping cake candy canes marshmallow caramels chupa chups. Halvah dessert tiramisu brownie lemon drops tootsie roll carrot cake. Cake soufflé oat cake cotton candy. Lollipop cake sweet roll croissant danish. Cake dessert tootsie roll cake liquorice sugar plum biscuit macaroon pie. Bonbon cookie cotton candy bear claw wafer.',
    'Marshmallow candy canes marshmallow caramels chocolate cake liquorice jelly. Gummies caramels jelly beans chupa chups brownie bonbon. Jujubes jujubes sesame snaps powder. Macaroon sesame snaps muffin cake marzipan topping muffin powder pastry. Macaroon sesame snaps topping. Sweet apple pie jelly tart. Cookie apple pie sweet roll pastry. Cookie chocolate chocolate bar sweet gummies.',
    'Chocolate sugar plum jelly-o sweet roll gummi bears oat cake powder pastry macaroon. Soufflé cheesecake apple pie jelly beans donut candy canes sweet macaroon. Gingerbread topping dessert bonbon sweet roll oat cake oat cake halvah. Cake chocolate cake chocolate sugar plum candy. Marshmallow brownie sweet dessert croissant chocolate fruitcake sweet donut. Cupcake muffin halvah.',
    'Cupcake ice cream gummies dessert tiramisu. Cupcake pie cake apple pie jelly-o brownie oat cake soufflé. Candy canes chocolate cake candy canes jelly beans lollipop. Dragée candy canes jujubes pastry cheesecake. Candy canes apple pie powder. Caramels dessert caramels sweet roll danish jelly-o jelly-o powder liquorice. Biscuit pie sugar plum. Oat cake jelly-o marshmallow pastry dragée gummi bears topping. Bear claw ice cream lollipop danish candy jelly-o jelly-o.',
    'Powder candy fruitcake. Bear claw sweet roll cake lollipop. Apple pie chupa chups cookie soufflé dessert topping gummi bears. Dragée gummi bears candy canes powder chupa chups. Cotton candy dragée lollipop. Sweet roll muffin oat cake marshmallow macaroon sugar plum muffin. Tart chupa chups candy. Fruitcake jujubes halvah marshmallow bonbon marshmallow. Croissant powder cheesecake donut bonbon. Caramels macaroon donut.',
    'Tiramisu halvah pastry jujubes chocolate bar sugar plum gummies candy. Chocolate chupa chups icing dessert muffin jelly-o oat cake. Powder dessert powder tart tart. Pie powder lemon drops sweet tart icing cake tootsie roll biscuit. Jelly jelly-o sweet roll. Biscuit jelly beans chocolate cake pudding. Sesame snaps wafer apple pie lemon drops cupcake oat cake pie.',
    'Gingerbread bonbon pudding biscuit sugar plum. Donut caramels cake danish lollipop. Chocolate bar jelly dessert candy canes. Sweet sesame snaps cookie. Croissant bear claw chocolate powder jelly beans ice cream. Bear claw brownie icing apple pie. Ice cream marshmallow tiramisu cotton candy brownie tiramisu jujubes. Croissant cheesecake tiramisu wafer powder pie macaroon.',
    'Powder cake croissant tootsie roll tart lollipop jelly beans. Cake lemon drops wafer muffin biscuit marshmallow brownie. Cotton candy jelly-o cotton candy gummies. Cake sesame snaps macaroon tootsie roll. Pie wafer topping tootsie roll apple pie marzipan sweet. Bonbon tootsie roll candy canes pastry brownie bear claw.',
];
const generatorBtn = $.querySelector('.btn-primary');
const placeGeneratedText = $.getElementById('result-text-generator');
generatorBtn.addEventListener('click', function (event) {
    event.preventDefault();
    placeGeneratedText.style.backgroundColor = 'inherit';
    placeGeneratedText.innerHTML = '';
    const paragraphNumber = $.getElementById('amount-paragraph');
    for (let index = 0; index < paragraphNumber.value; index++) {
        let randomIndexTextGenerator = Math.floor(Math.random() * dummyText.length);
        console.log(randomIndexTextGenerator);
        if (index === paragraphNumber.value - 1)
            placeGeneratedText.innerHTML += dummyText[randomIndexTextGenerator];
        else
            placeGeneratedText.innerHTML += dummyText[randomIndexTextGenerator] + '<br><br>';
    }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////
// resize event
window.addEventListener('resize', function () {
    console.log('window Width: ' + window.innerWidth + '\nwindow Height: ' + window.innerHeight);
})
///////////////////////////////////////////////////////////////////////////////////////////////////////
// more mouse events: mouseenter, mouseover, mousemove, mousedown, click, dblclick, contextmenu, mouseup, mouseleave, mouseout.
const mouseEventsBtn = $.getElementById('mouseEvents');
mouseEventsBtn.addEventListener('mouseenter', function () {console.log('mouse   enter');});
mouseEventsBtn.addEventListener('mouseover', function () {console.log('mouse   over');});
mouseEventsBtn.addEventListener('mousemove', function () {console.log('mouse   move');});
mouseEventsBtn.addEventListener('mousedown', function () {console.log('mouse   down');});
mouseEventsBtn.addEventListener('click', function () {console.log('mouse   click');});
mouseEventsBtn.addEventListener('dblclick', function () {console.log('mouse   dblClick');});
mouseEventsBtn.addEventListener('contextmenu', function () {console.log('mouse   contextmenu');});
mouseEventsBtn.addEventListener('mouseup', function () {console.log('mouse   up');});
mouseEventsBtn.addEventListener('mouseleave', function () {console.log('mouse   leave / same enter');});
mouseEventsBtn.addEventListener('mouseout', function () {console.log('mouse   out / same over');});
///////////////////////////////////////////////////////////////////////////////////////////////////////
// append in html with "insertAdjacentHTML(position, text);" positions: beforebegin, afterbegin, beforeend, afterend.
const insertLiBtn = $.getElementById('insertLiBtn');
const middleLi = $.getElementById('middleLi');
insertLiBtn.addEventListener('click', function () {
    middleLi.insertAdjacentHTML("beforebegin", "<div style='background-color: palegreen'><li>li inside a div before div of 'middle li'</li></div>")
    middleLi.insertAdjacentHTML("afterbegin", "<li>li before 'middle li'</li>")
    middleLi.insertAdjacentHTML("beforeend", "<li>li after 'middle li'</li>")
    middleLi.insertAdjacentHTML("afterend", "<div style='background-color: palegoldenrod'><li>li inside a div after div of 'middle li'</li></div>")
})
///////////////////////////////////////////////////////////////////////////////////////////////////////
// work with delete (don't use for array)
function deleteItemOfObj () {
    let objForDelete = {
        id: 1,
        name: 'Madhi',
        age: 18,
    }
    console.log('before delete age:', objForDelete);
    console.log('delete result:', delete objForDelete.age);
    console.log('after delete age:', objForDelete);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
// fragment and dom manipulation
const userUlTestFragment = $.getElementById('userAddWithFragment');

let usersArrayFragment = ['ali','akbar','matin','mahdi','mohammad'];

let newUsersFragmentLi;
let usersFragment = $.createDocumentFragment();

usersArrayFragment.forEach(function (user) {
    newUsersFragmentLi = $.createElement('li');
    newUsersFragmentLi.innerHTML = user;

    usersFragment.appendChild(newUsersFragmentLi);
})
userUlTestFragment.appendChild(usersFragment);
///////////////////////////////////////////////////////////////////////////////////////////////////////
// work with console methods
function consoleMethod() {
    let num1 = 2, num2 = 3;
    console.clear();
    console.log('\nsimple log');
    console.log('\n%clog with style', 'color: violet; background-color: purple');
    console.error('\ncustom error');
    console.info('\ncustom info');
    console.warn('\ncustom warning');
    console.assert(num1 > num2, '\nsmall'); // show like error if false. not show if true.

    let userObj = [
        {id:1, name:'mahdi', age:20},
        {id:2, name:'mohammad', age:21},
        {id:3, name:'ali', age:22},
    ]
    console.table(userObj); // can use for obj and array

    console.time('\ntime of do code between of time() and timeEnd()'); // you can set label for time() if you want but this most be same of timeEnd() label
    for(let i = 0; i < 1000; i++) {
        // code
    }
    console.timeEnd('\ntime of do code between of time() and timeEnd()'); // you can set label for timeEnd() if you want but this most be same of time() label

    console.log('\nlog before group');
    console.group('group label');
    console.log('fits grouped log');
    console.log('second grouped log');
    console.log('third grouped log');
    console.groupEnd('group label');
    console.log('log after group\n');
}
/////////////////////////////////////////////////////////////////////////////////////////////////////// BOM
// window.inner window.outer 
const clientSizeElem = $.getElementById('clientSize');
function getSizeInformation() {
    console.log('window.innerWidth: ', window.innerWidth);
    console.log('window.innerHeight: ', window.innerHeight);

    console.log('window.outerWidth: ', window.outerWidth);
    console.log('window.outerHeight: ', window.outerHeight);

    console.log('clientSizeElem.clientWidth: ', clientSizeElem.clientWidth);
    console.log('clientSizeElem.clientHeight: ', clientSizeElem.clientHeight);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise ep 240: show Scroll (fixed to top of the page)
const showScroll = $.getElementById('showScroll');
window.addEventListener('scroll', function () {
    let horizantalScroll = window.scrollY;
    let bodyHeight = body.clientHeight;
    let windowInnerHeight = window.innerHeight;

    let scrollPercent = Math.round((horizantalScroll / (bodyHeight - windowInnerHeight)) * 100);

    showScroll.style.width = scrollPercent + '%';
})
///////////////////////////////////////////////////////////////////////////////////////////////////////
// window.screen
function getScreenInfo() {
    console.log(screen); // window.screen
    console.log('screen.height: ', screen.height);
    console.log('screen.availHeight: ', screen.availHeight);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
// window.history
function historyInformation() {
    console.log(history);
    console.log('history.length', history.length);
    console.group('more about history:');
    console.log('history.back() : for go back');
    console.log('history.forward() : for go forward');
    console.log('history.go(number) : for go forward to number');
    console.log('history.go(-number) : for go back to number');
    console.log('history.go(0) : reload');
    console.groupEnd('more about history:');
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
// window.loaction
function locationInformation() {
    console.log(location);
    console.log('location.href: ', location.href);
    console.log('location.protocol: ', location.protocol);
    console.log('location.hostname: ', location.hostname);
    console.log('location.pathname: ', location.pathname);
    console.log('location.search: ', location.search);
    console.log('location.hash: ', location.hash);
    console.log('for redirect: ', 'location.href = https://google.com');
    console.log('for reload: ', 'location.reload()');
    console.log('for reload: ', 'location.href = location.href');
    console.log('assign (go to url: new page in history): ', "location.assign('https://google.com')");
    console.log('replace (go to url: like replace the page. no new page): ', "location.replace('https://google.com')");
}
function reloadBtn () {
    location.reload();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
// find user with location.search
const targetUserSpan = $.getElementById('showTargetUser');
let usersSearch = [
    {id: 1, name: 'ali', age: 24},
    {id: 2, name: 'amir', age: 26},
    {id: 3, name: 'amin', age: 22},
    {id: 4, name: 'reza', age: 24},
]
// bad way
// location.search.slice(1).split('=')[1]

// good way -----------------------------------------------------|
let userIdParams = new URLSearchParams(location.search); // ----|
let userId = userIdParams.get('userId'); // -------------------|
// -----------------------------------------------------------|
let targetUser = usersSearch.find(function (user) {
    return user.id == userId;
})
if (targetUser) {
    targetUserSpan.innerHTML = ' id: ' + targetUser.id + ' | name: ' + targetUser.name + ' | age: ' + targetUser.age;
} else {
    targetUserSpan.innerHTML = 'not finde!'
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
// offline and online events
const isOnlineH1 = $.getElementById('isOnlineH1');

window.addEventListener('online', function () {
    isOnlineH1.style.color = 'green';
    isOnlineH1.innerHTML = 'Online';
})
window.addEventListener('offline', function () {
    isOnlineH1.style.color = 'darkred';
    isOnlineH1.innerHTML = 'Offline';
})
///////////////////////////////////////////////////////////////////////////////////////////////////////