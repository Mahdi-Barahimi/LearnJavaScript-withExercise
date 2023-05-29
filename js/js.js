/*
// datatype
var num = 10
var str = "M.BaRa"
var bool = true
//alert(typeof bool)
*/
/*
// prompt & alert
var username = prompt("username?", "tom")
alert("Hi" + " " + username)
*/
/*
// str to number , number to str , number to bool , str to bool
var sTn1 = "20"
var sTn2 = "2gvhtrO"
var nTs1 = 200 // shortcut -> var toNumber = +value or +varName
var nTb1 = 0
var nTb2 = -1
var sTb1 = "gg"
var sTb2 = ""
alert(sTn1 + " --typeOf--> " + typeof Number(sTn1) + "\n" + sTn2 + " --toNumber--> " + Number(sTn2) + " --typeOf--> " + typeof Number(sTn2) + "\n" + nTs1 + " --typeOf--> " + typeof String(nTs1) + "\n" + nTb1 + " --typeOf--> " + Boolean(nTb1) + "\n" + nTb2 + " --typeOf--> " + Boolean(nTb2) + "\n" + sTb1 + " --typeOf--> " + Boolean(sTb1) + "\n" + sTb2 + " --typeOf--> " + Boolean(sTb2))
*/
/*
// use oprator: + , - , * , / , ** , %
var baghi = 19 % 4
alert(baghi)
var ufn = Number(prompt("your first number : "))
var usn = +prompt("your second number : ")
alert("jam\'e : " + (ufn + usn) + "\nmenha : " + (ufn - usn) + "\nzarb : " + (ufn * usn) + "\ntaghsim : " + (ufn / usn) + "\ntavan : " + (ufn ** usn) + "\nbaghi : " + (ufn % usn))
*/
/*
//NaN
var strForTestNaN = "aklsfjasfj"
var numForTestNaN = 5
alert(strForTestNaN / numForTestNaN)
alert(isNaN(strForTestNaN / numForTestNaN))
*/
/*
//use comparative operators == > < != ===
var numComparative1 = 5
var numComparative2 = 10
var strComparative1 = "5"
alert(numComparative1 == numComparative2) // false
alert(numComparative1 != numComparative2) // true
alert(numComparative1 > numComparative2) // false
alert(numComparative1 < numComparative2) // true
alert(numComparative1 == strComparative1) // true
alert(numComparative1 === strComparative1) // false
alert(numComparative1 !== strComparative1) //true
*/
var errorTakeNumber = "Give me a number!"
/*
// if, else if & else
var userNumForIf = prompt("your number : ", 5)
if (userNumForIf % 2 == 0) {
    alert("Zog")
} else if (isNaN(userNumForIf)==true) {
    alert(errorTakeNumber)
} else {
    alert("Fard")
}
// OR ||
if (isNaN(userAgeForOR) || isNaN(userGenderForOR))
    alert(errorTakeNumber)
else if (userAgeForOR < 18 || userGenderForOR == 0)
    alert("Bye")
else
    alert("Hello")
// AND &&
if (!true && false)
    alert("false false")
else if (!false && true)
    alert("true true")
// conditional oprator
var userAgeConditional = prompt("How old Are you")
userAgeConditional >= 18 ? alert("Hello") : alert("Bye")
// exercise
var userNumForIf1 = +prompt("1- your number : ", 5)
var userNumForIf2 = +prompt("2- your number : ", 5)
var userNumForIf3 = +prompt("3- your number : ", 5)
if (isNaN(userNumForIf1) || isNaN(userNumForIf2) || isNaN(userNumForIf3))
    alert(errorTakeNumber)
else {
    var avgUserNumForIf = (userNumForIf1 + userNumForIf2 + userNumForIf3) / 3
    alert(avgUserNumForIf)
}
//
var userAgeForLogin = +prompt("your age?", 17)
if (isNaN(userAgeForLogin))
    alert(errorTakeNumber)
else if (userAgeForLogin >= 18)
    alert("Hello")
else
    alert("Bye")
//
var number = +prompt("your number :")
var tavan = +prompt("tavan :")
if (isNaN(number) == true || isNaN(tavan) == true)
    alert(errorTakeNumber)
else
    alert(number ** tavan)
//
var userAge = +prompt("your birthday(shamsi) :")
if (isNaN(userAge) == true || userAge > 1402)
    alert(errorTakeNumber + " Shamsi!")
else
    alert(1402 - userAge)
//
var userMinute = +prompt("your minute: ")
if (isNaN(userMinute) == true)
    alert(errorTakeNumber)
else
    alert(userMinute / 60)
var userAgeForOR = +prompt("your age: ")
var userGenderForOR = +prompt("if your gender is male enter number 1 and you are female enter number 0 : ")
*/
/*
// switch case
var userScoreForSwitch = +prompt("your score");
switch(userScoreForSwitch) {
    case 20:
    case 19:
    case 18:
        alert('A');
        break;
    case 17:
    case 16:
    case 15:
        alert('B');
        break;
    case 14:
    case 13:
    case 12:
        alert('C');
        break;
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        alert("Bye");
        break;
    default:
        alert(errorTakeNumber + "\nbetween 0 - 20 without float");
}
*/
/*

// function declaration and function expression
function plusNumber() {
    var userNumberForFunction1 = +prompt("your 1st number: ")
    var userNumberForFunction2 = +prompt("your 2nd number: ")
    var userPlus = userNumberForFunction1 + userNumberForFunction2
    alert(userNumberForFunction1 + " + " + userNumberForFunction2 + " = " + userPlus)
}
var zarbNumber = function() {
    var userNumberForFunction1 = +prompt("your 1st number: ")
    var userNumberForFunction2 = +prompt("your 2nd number: ")
    var userZarb = userNumberForFunction1 * userNumberForFunction2
    alert(userNumberForFunction1 + " * " + userNumberForFunction2 + " = " + userZarb)
}
plusNumber()
plusNumber()
zarbNumber()
zarbNumber()

// parameter in functions
function testParameter(parameter1 = "defult value parameter 1", parameter2 = "defult value parameter 2") {
    alert("your first parameter: " + parameter1)
    alert("your second parameter: " + parameter2)
}
testParameter(prompt("your first parameter"))

// return in function
function sumAndReturn(numSumReturn1, numSumReturn2) {
    var sumReturnFunction = numSumReturn1 + numSumReturn2
    return sumReturnFunction
}
var sumReturn = sumAndReturn(5, 10)
alert(sumReturn)

// exercise
function zogOrFard(userNumber) {
    if(userNumber % 2 === 0)
        alert("Zog")
    else if(userNumber % 2 === 1)
        alert("Fard")
        else
        alert(errorTakeNumber)
    }
    zogOrFard(+prompt("your Number"))
function avg3Number(numberForAvg1, numberForAvg2, numberForAvg3) {
    var resultAvg3Number = (numberForAvg1 + numberForAvg2 + numberForAvg3) / 3
    if(isNaN(numberForAvg1) || isNaN(numberForAvg2) || isNaN(numberForAvg3))
        alert(errorTakeNumber)
    else
        alert("avg of your numbers: " + resultAvg3Number)
}
avg3Number(+prompt("your first number: "), +prompt("your second number: "), +prompt("your third number: "))
*/
/*
// string methods

// length and index []
var strMethod = "saبzAbi"
alert(strMethod.length + " - " + strMethod[2] + " - " + strMethod[10])

// 
var strMethods = "    Hello Java Script     "
console.log("charAt: " + strMethods.charAt(5))   // console.log(strMethods[5])
console.log("charCodeAt: " + strMethods.charCodeAt(5)) // Ascii code
console.log("concat: " + strMethods.concat(" & React")) // console.log(strMethods + " & React")
console.log("trim: " + strMethods.trim())
console.log("toLowerCase: " + strMethods.toLowerCase())
console.log("toUpperCase: " + strMethods.toUpperCase())
console.log("search: " + strMethods.search("Java"))
console.log("indexOf: " + strMethods.indexOf("Java"))
console.log("includes: " + strMethods.includes("Java"))
console.log("slice: " + strMethods.slice(10, 14))
console.log("substr: " + strMethods.substr(10, 4))
console.log("substring: " + strMethods.substring(10, 14))

// exercise
var usernameStringMethod = prompt("username: ")
var passwordStringMethod = prompt("Password: ")
if(usernameStringMethod.length < 3 || passwordStringMethod.length < 8)
    alert("username 3 character or more And password 8 character or more")
else 
    alert("username: " + usernameStringMethod + "\npassword: " + passwordStringMethod)

// 
var userLogIn = prompt("your username for login: ")
if(userLogIn.toLowerCase() == "ali")
    alert("Hello")
else
    alert("Bye")
*/
/*
// Math methods

console.log(Math.PI) // 3.14...
console.log(Math.pow(2, 10)) // 2 ** 10
console.log(Math.sqrt(25)) // x * x == 25 -> 5 * 5 == 25 -> Math.sqrt(25) == 5
console.log(Math.abs(-25)) // |-25| -> 25
console.log(Math.min(10, 2, 100, -5, -2)) // smallest -> -5
console.log(Math.max(10, 2, 100, -5, -2)) // biggest -> 100
console.log(Math.trunc(25.8)) // -> 25
console.log(Math.floor(25.8)) // -> 25
console.log(Math.round(25.8)) // -> 26
console.log(Math.round(25.2)) // -> 25
console.log(Math.ceil(25.2)) // -> 26
console.log(Math.random() * 10) // random between 0-1

// exercise
console.log(Math.floor(Math.random() * 100000))
*/
/*
// assigment Operators

var assigmentOperators = 10
console.log(assigmentOperators)
assigmentOperators += 10 // assigmentOperators = assigmentOperators + 10
console.log(assigmentOperators)
assigmentOperators -= 10 // assigmentOperators = assigmentOperators - 10
console.log(assigmentOperators)
assigmentOperators *= 10 // assigmentOperators = assigmentOperators * 10
console.log(assigmentOperators)
assigmentOperators /= 10 // assigmentOperators = assigmentOperators / 10
console.log(assigmentOperators)
assigmentOperators **= 10 // assigmentOperators = assigmentOperators ** 10
console.log(assigmentOperators)

assigmentOperators = 10
assigmentOperators++ // assigmentOperators += 1 // assigmentOperators = assigmentOperators + 1
console.log(assigmentOperators)
++assigmentOperators // assigmentOperators += 1 // assigmentOperators = assigmentOperators + 1
console.log(assigmentOperators)
assigmentOperators-- // assigmentOperators -= 1 // assigmentOperators = assigmentOperators - 1
console.log(assigmentOperators)
--assigmentOperators // assigmentOperators -= 1 // assigmentOperators = assigmentOperators - 1
console.log(assigmentOperators)

// exercise: diffrent between x++ and ++x
var numberPlusPlus = assigmentOperators++ // 1) numberPlusPlus = assigmentOperators | 2) assigmentOperator += 1
console.log(numberPlusPlus + ", " + assigmentOperators) // 10, 11
assigmentOperators = 10
var numberPlusPlus = ++assigmentOperators // 1) assigmentOperator += 1 | 2) numberPlusPlus = assigmentOperators
console.log(numberPlusPlus + ", " + assigmentOperators) // 11, 11
*/
/*
//for loop

for(var i = 1; i <= 10; i++) {
    console.log(i)
}
// exercise
for(var i = 0; i <= 100; i += 2)
    console.log(i)

for(var i = 0; i <= 100; i++)
    if(i % 2 == 0)
        console.log(i)
//
var allPrice = 0;
for(i = 0; i < 5; i++)
    allPrice += +prompt("Price: ")
alert("sum of goods price: " + allPrice)
// 
var avgNumberLoop = 0;
var countOfNumbers = +prompt("count of numbers: ");
for(i = 0; i < countOfNumbers; i++)
    avgNumberLoop += +prompt("your " + (i + 1) + " number: ");
avgNumberLoop /= countOfNumbers;
alert("avg of your numbers: " + avgNumberLoop);
// 
var userNumberSum = prompt("your number: ");
var sumDigits = 0;
for(var i = 0; i < userNumberSum.length; i++)
    sumDigits += +userNumberSum[i];
alert("sum Digits of your number: " + sumDigits)

var userNumberSum = prompt("your number: ");
var sumDigits = 0;
for(var i = 0; userNumberSum / 10 != 0; i++) {
    sumDigits = sumDigits + (userNumberSum % 10);
    userNumberSum = Math.floor(userNumberSum / 10)
}
alert("sum Digits of your number: " + sumDigits);
// 
var userCountDigits = prompt("your number: ")
if(isNaN(userCountDigits))
    alert(errorTakeNumber);
else
    alert("count digits of your number: " + userCountDigits.length);

var userCountDigits = prompt("your number: ");
if(userCountDigits == 0) {
    var i = 1;
    alert("count digits of your number: " + i);
} else {
    if(isNaN(userCountDigits))
        alert(errorTakeNumber);
    else {
        for(i = 0; userCountDigits / 10 != 0; i++)
            userCountDigits = Math.floor(userCountDigits / 10);
            alert("count digits of your number: " + i);
        }
    }
// 
var userNumberEvenDigits1 = prompt("enter your first number: ");
var userNumberEvenDigits2 = prompt("enter your 2nd number: ");
var keepNumber = "even digits of your numbers: ";
for(var i = 0; i < userNumberEvenDigits1.length || i < userNumberEvenDigits2.length; i++) {
    if(+userNumberEvenDigits1[i] % 2 == 0)
        keepNumber = keepNumber + " - " + userNumberEvenDigits1[i]
    if(+userNumberEvenDigits2[i] % 2 == 0)
        keepNumber = keepNumber + " - " + userNumberEvenDigits2[i]
}
alert(keepNumber);
*/
/*
// while

var i = 0;
while(i < 5) {
    console.log(i);
    i++;
}
// exercise
var i = 0;
while(i < 100) {
    console.log(i)
    i += 2;
}
// 
var avgNumberLoop = 0;
var countOfNumbers = +prompt("count of numbers: ");
var i = 0;
while(i < countOfNumbers) {
    avgNumberLoop += +prompt("your " + (i + 1) + " number: ");
    i++;
}
avgNumberLoop /= countOfNumbers;
alert("avg of your numbers: " + avgNumberLoop);
// 
var userNumberSum = prompt("your number: ");
var sumDigits = 0;
var i = 0;
while( i < userNumberSum.length) {
    sumDigits += +userNumberSum[i];
    i++;
}
alert("sum Digits of your number: " + sumDigits)

var userNumberSum = prompt("your number: ");
var sumDigits = 0;
while(userNumberSum / 10 != 0) {
    sumDigits = sumDigits + (userNumberSum % 10);
    userNumberSum = Math.floor(userNumberSum / 10)
}
alert("sum Digits of your number: " + sumDigits);
// 
var userCountDigits = prompt("your number: ")
if(isNaN(userCountDigits))
    alert(errorTakeNumber);
else
    alert("count digits of your number: " + userCountDigits.length);

var userCountDigits = prompt("your number: ");
if(userCountDigits == 0) {
    var i = 1;
    alert("count digits of your number: " + i);
} else {
    if(isNaN(userCountDigits))
        alert(errorTakeNumber);
    else {
        var counter = 0;
        while(userCountDigits / 10 != 0) {
            userCountDigits = Math.floor(userCountDigits / 10);
            counter++;
        }
            alert("count digits of your number: " + counter);
        }
    }
var startUserNumber = +prompt("enter your first number: ") + 1; // between
var endUserNumber = +prompt("enter your 2nd number: ");
while(startUserNumber < endUserNumber) {
    if(startUserNumber % 2 == 0)
        console.log(startUserNumber);
    startUserNumber++;
}
*/
/*
// do while
do {
    alert("do while")
} while (false);
// exercise
do {
    var adadPaye = prompt("adad paye ra vared konid: ");
    var adadTavan = prompt("adad tavan ra vared konid: ");
    alert(Math.pow(adadPaye, adadTavan));
} while (false);

// pow with for
var adadPaye = +prompt("adad paye ra vared konid: ");
var adadTavan = +prompt("adad tavan ra vared konid: ");
var pow = 1;
for(var i = 0; i < adadTavan; i++)
    pow *= adadPaye;
alert(pow)

// pow with while
var adadPaye = +prompt("adad paye ra vared konid: ");
var adadTavan = +prompt("adad tavan ra vared konid: ");
var pow = 1;
var i = 0;
while(i < adadTavan) {
    pow *= adadPaye;
    i++;
}
alert(pow)

// pow with dowhile
var adadPaye = +prompt("adad paye ra vared konid: ");
var adadTavan = +prompt("adad tavan ra vared konid: ");
var pow = 1;
var i = 0;
do {
    if(adadTavan != 0)
        pow *= adadPaye;
    i++;
} while(i < adadTavan)
alert(pow)
*/
/*
// array

var testArr = ["apple", "orange", "water melone"];
console.log(testArr[2]);
console.log(testArr[2].charAt(1));

// push, pop, unshift, shift
var arrScore = [5, 8, 7, 10, 12];
console.log(arrScore);

arrScore.push(14, 16) // arrScore[5] = 14; arrScore[5] = 16;
console.log(arrScore);

arrScore.pop();
console.log(arrScore);

arrScore.unshift(20, 15);
console.log(arrScore);

arrScore.shift();
console.log(arrScore);

// exercise
var avgNumberArr = [];
var countNumbersArr = +prompt("how many numbers there are that you want get they avrage: ");
var sum = 0;
for(var i = 0; i < countNumbersArr; i++) {
    avgNumberArr.push(+prompt("your " + (i + 1) + " number: "));
    sum += avgNumberArr[i];
}
alert("avg: " + (sum / avgNumberArr.length) + "\nyour numbers: " + avgNumberArr);
*/
/*
// object

var testObject = {id:1, name:"parsa", age:24};
console.log(testObject["age"]);
console.log(testObject.age);
var ObjectsArray = [
    {id:1, name:"mohammad", age:20},
    {id:2, name:"ali", age:29},
    {id:3, name:"mehdi", age:25},
]
console.log(ObjectsArray[1]["age"]);
console.log(ObjectsArray[1].age);
// exercise
var objectUsers = [
    {id:1, name:"Mohammad", Lname:"Mmdi", age:30, eMail:"Mohammad@mmdi.mmd"},
    {id:2, name:"Mehdi", Lname:"Mmdi", age:35, eMail:"Mehdi@mmdi.mmd"},
    {id:3, name:"Soheil", Lname:"Mmdi", age:30, eMail:"soheil@mmdi.mmd"},
];
var newUserBool1 = true, newUserBool2 = true, newUserBool3 = true;
while(newUserBool1) {
    var newUserName = prompt("enter your name");
    if(newUserName.length < 3 || newUserName.length > 10)
        alert("your name 3-10 characters!")
    else
        newUserBool1 = false;
}
while(newUserBool2) {
    var newUserLName = prompt("enter your last name");
    if(newUserLName.length < 3 || newUserLName.length > 15)
        alert("your last name 3-15 characters!")
    else
        newUserBool2 = false;
}
while(newUserBool3) {
    var newUserAge = +prompt("enter your age");
    if(isNaN(newUserAge) || newUserAge.toString().length > 3)
        alert("age most be a number maximum 3 characters!")
    else
        newUserBool3 = false;
}
var newUserEMail = prompt("enter your e-mail");
objectUsers.push({id:objectUsers.length + 1, name:newUserName, Lname:newUserLName, age:newUserAge, eMail:newUserEMail});
console.log(objectUsers);
*/
/*
// forEach

var arrForEach = ["item1", "item2", "item3", "item4", "item5"];
arrForEach.forEach(function(items) {
    console.log(items);
})

// exercise

var userForEach = [
    {id:1, name:"Mohammad", Lname:"Mmdi", age:30, eMail:"Mohammad@mmdi.mmd"},
    {id:2, name:"Mehdi", Lname:"Mmdi", age:35, eMail:"Mehdi@mmdi.mmd"},
    {id:3, name:"Soheil", Lname:"Mmdi", age:30, eMail:"soheil@mmdi.mmd"},
];
userForEach.forEach(function(users) {
    console.log(users);
})
*/
/*
// some

var arraySome = [
    {id:1, name:"mahdi", age:23},
    {id:2, name:"mohammad", age:15},
    {id:3, name:"ali", age:13}
];
var isUser = arraySome.some(function(person) { // some like forEach and includes - when come true it's stop
    console.log(person);
    return person.id == 2;
})
console.log(isUser);

// exercise
var kalaHa = [
    {name:"airpad", price:60000},
    {name:"headset", price:60000},
    {name:"headphone", price:60000},
    {name:"micerophone", price:60000},
    {name:"handsfree", price:60000},
    {name:"speaker", price:60000}
];
var sabad = [
    {name:"mous", price:50000},
    {name:"key board", price:80000},
    {name:"pad mous", price:10000}
];
var userKala = prompt("what do you want: \n", "micerophone");
var userSaveKala = null;
var hastKala = kalaHa.some(function(kala) {
    userSaveKala = kala;
    return kala.name == userKala;
})
if(hastKala) {
    sabad.push(userSaveKala);
    var gheymatKol = 0;
    sabad.forEach(function(kalayesabad) {
        gheymatKol+= kalayesabad.price;
    })
    alert("ezafe shod\ngheymat kol: " + gheymatKol + "\nmoshahede dar console.");
    console.log(sabad);
} else {
    alert("nist kala");
}
*/
/*
// every

var usersEvery = [18, 19, 15, 20];
var isAllEvery = usersEvery.every(function(age) { // "every" like "some" but when come false it's stop
    console.log(age);
    return age >= 18
})
console.log(isAllEvery);

// exercise
var users = [
    {id:1, userName:"mahdi", age: 20},
    {id:2, userName:"hadi", age: 19},
    {id:3, userName:"hosein", age: 27},
    {id:4, userName:"mohammad", age: 18},
    {id:5, userName:"ali", age: 18},
];
var isAll18 = users.every(function(age){
    return age.age >= 18;
})
if(isAll18) {
    alert("you can");
} else {
    alert("sorry you can\'t")
}
*/
/*
// splice and findIndex

var numSplice = [2, 53, 32, 64, 10, 46, 75, 90];
numSplice.splice(1, 3, 12, 14);
console.log(numSplice);

// 

var nameFindeIndex = ["amin", "ali", "amir", "mohammad", "hassan"]
var mohammadFindeIndex = nameFindeIndex.findIndex(function(name) {
    return name == "mohammad";
})
console.log(mohammadFindeIndex);
*/
/*
// exercise remove or add goods
var goods = [
    {name:"airpad", price:60000},
    {name:"headset", price:60000},
    {name:"headphone", price:60000},
    {name:"micerophone", price:60000},
    {name:"handsfree", price:60000},
    {name:"speaker", price:60000}
];
var sabad = [
    {name:"mous", price:50000},
    {name:"key board", price:80000},
    {name:"pad mous", price:10000}
];
var userAction = prompt("what do you do?\nfor add enter '1'\nfor remove enter '2'");
if(userAction == 1) {
    var EnterNewGood = prompt("name of your new good: ", "micerophone");
    var userNewGood = goods.findIndex(function(good) {
        return good.name == EnterNewGood;
    })
    console.log(userNewGood);
    if(userNewGood == -1) {
        alert("not available!");
    } else {
        sabad.push(goods[userNewGood]);
        alert("added! for see the 'sabad' go to console!");
        console.log(sabad);
    }
} else if(userAction == 2) {
    var removeGood = prompt("name of that you want remove: ", "pad mous");
    var userRemoveGood = sabad.findIndex(function(good) {
        return good.name == removeGood;
    })
    if(userRemoveGood == -1) {
        alert("not available in your 'sabad'!")
    } else {
        sabad.splice(userRemoveGood, 1);
        alert("removed! for see the 'sabad' go to console!");
        console.log(sabad);
    }
} else {
    alert("please enter '1' for add or '2' for remove the goods of your 'sabad'!");
}
*/
/*
// map

var numMap = [2,5,6,7,8,9,23];
var resultMap = numMap.map(function(number) {
    return number ** 2;
})
var resultMap2 = numMap.forEach(function(number) {
    return number ** 2;
})
console.log(resultMap);
console.log(resultMap2);
*/
/*
// fillter

var scoreFillter = [20, 10, 19, 18, 17, 15];
var fillteredScore =  scoreFillter.fillter(function (fillter) {
    return fillter >= 18;
})

// exercise ep: 75
var sabadErsal = [
    {id: 1, naem: "mouse", price: 120000},
    {id: 2, naem: "cable", price: 80000},
    {id: 3, naem: "speaker", price: 500000},
    {id: 4, naem: "AUX", price: 50000},
    {id: 5, naem: "USB", price: 85000},
    {id: 6, naem: "airpad", price: 850000}
];
var gheymatKolKala = 0;
var darayeHazineErsal = sabadErsal.filter(function (kalaPrice) {
    gheymatKolKala = kalaPrice.price + gheymatKolKala;
    return kalaPrice.price < 100000;
})
var hazineErsal = darayeHazineErsal.length * 1000;
alert("price of your goods: " + gheymatKolKala + "\nprice for send them to location: " + hazineErsal + "\nprice all of them: " + (gheymatKolKala + hazineErsal));
*/
/*
// Array methods
var arrayMe = [30, 40, 80, 40, 50, 20, 40, 60];
var strMe = "test, test2, test3";
var numMe = 50;
console.log(arrayMe);
console.log(arrayMe.indexOf(40));
console.log(arrayMe.indexOf(40, 2));
console.log(arrayMe.lastIndexOf(40));
console.log(arrayMe.slice(2, 4));
console.log(arrayMe.reverse());
console.log(arrayMe.join(', '));
console.log(strMe.split(', '));

// exercise ep:77
var userWordMe = prompt("enter your number");
var reverseUserWordMe = userWordMe.split('').reverse().join('');
if(userWordMe == reverseUserWordMe) {
    alert("your word is same with reverse");
} else {
    alert("your word is not same with reverse");
}
// exercise ep:79
var toDoList = [
    {id: 1, name: "mesvak sobh", status: false},
    {id: 2, name: "shostan lebas", status: false},
    {id: 3, name: "auto lebas", status: true}
]
var userActionToDoList = +prompt("what do you want to do?\n'1' for add\n'2' for remove\n'3' for change status");
if(userActionToDoList === 1) {
    var newToDoListItem = prompt("title of your new toDo");
    toDoList.push({id: toDoList.length + 1, name: newToDoListItem, status: false});
} else if(userActionToDoList === 2) {
    var removeToDoListItem = prompt("title of your toDo that you want to delete this");
    var haveRemoveToDo = toDoList.findIndex(function (name) {
        return name.name == removeToDoListItem;
    })
    if(haveRemoveToDo != -1) {
        toDoList.splice(haveRemoveToDo, 1);
        alert("deleted!");
    } else {
        alert("not found!");
    }
} else if(userActionToDoList === 3) {
    var changeStatus = prompt("enter name of toDo that you want to change status");
    var haveChangeToDo = toDoList.findIndex(function (name) {
        return name.name == changeStatus;
    })
    if(haveChangeToDo != -1) {
        toDoList[haveChangeToDo].status = !toDoList[haveChangeToDo].status;
        alert("changed!");
    } else {
        alert("not found!");
    }
} else {
    alert("enter the valid value")
}
console.log(toDoList);

// exercise ep:80

var task = [
    {id: 1, name:"mahdi", task:"task1"},
    {id: 2, name:"ali", task:"task1"},
    {id: 3, name:"reza", task:"task1"}
];
var newTask = prompt("newTask");
var forWho = prompt("task for").toLowerCase();
var haveWho = false;
task.forEach(function (name) {
    if(name.name == forWho) {
        name.task = name.task + " - " + newTask;
        alert("added");
        haveWho = true;
    }
})
if(!haveWho) {
    alert("not found!")
}
console.log(task);
*/
/*

// var primitives and reference
var varPrimitives1 = 5;
var varPrimitives2 = varPrimitives1;
varPrimitives2 = 10;
console.log(varPrimitives1);
console.log(varPrimitives2);

var varReference1 = [1, 2, 3, 4];
var varReference2 = varReference1;
varReference2.push(5);
console.log(varReference1);
console.log(varReference2);

// exercise ep:82
var mabda = {
    esfahan : ["Esfahan", "varzane", "semirom"],
    tehran : ["tehran", "lavasan", "karaj"],
    shiraz : ["shiraz", "jamshid", "fars"]
}
var userMabda = prompt("enter your start: ").toLowerCase();
var sharMabda = mabda[userMabda];
sharMabda.forEach(function (shahr) {
    console.log(shahr);
});

// exercise ep:83
var questions = [
    {question: "1 + 1 ?", answer: "2"},
    {question: "2 + 2 ?", answer: "4"},
    {question: "3 + 3 ?", answer: "6"},
    {question: "4 + 4 ?", answer: "8"},
    {question: "5 + 5 ?", answer: "10"}
];
var userAnswer = '';
var score = 0;
questions.forEach(function (question) {
    userAnswer = prompt(question.question);
    if(question.answer == userAnswer)
        score++;
});
console.log(score);

// exercise ep:84
var userNumCal1 = +prompt("enter the number one:");
var userNumCal2 = +prompt("enter the number two:");
var userNumOp = +prompt("enter oprator:\n1) +\n2) -\n3) *\n 4) /");
var resultCal = 0;
if (isNaN(userNumCal1) || isNaN(userNumCal2) || isNaN(userNumOp)) {
    alert(errorTakeNumber);
} else {
    if (userNumOp === 1)
        resultCal = userNumCal1 + userNumCal2;
    else if (userNumOp === 2)
        resultCal = userNumCal1 - userNumCal2;
    else if (userNumOp === 3)
        resultCal = userNumCal1 * userNumCal2;
    else if (userNumOp === 4)
        resultCal = userNumCal1 / userNumCal2;
    else
        alert("please enter the number of the list: ");
}
console.log(resultCal);
*/
/*
// find in array

var FindUsers = [
    {id:1, name:"mtin", age:24},
    {id:1, name:"mhdi", age:28},
    {id:1, name:"mhsn", age:21},
    {id:1, name:"prhm", age:25}
];
var findUser = FindUsers.find(function (user) {
    return user.name === "mhdi";
});
console.log(findUser);

// exercise ep: 86
var users = [
    {id: 1, name: "mtin", password: 24},
    {id: 1, name: "mhdi", password: 28},
    {id: 1, name: "mhsn", password: 21},
    {id: 1, name: "prhm", password: 25}
];
var userNameForgotPass = prompt("enter your username for reset password: ");
var findUserForgotPass = users.find(function (user) {
    return user.name === userNameForgotPass;
});
if (findUserForgotPass != undefined) {
    alert("your password: " + findUserForgotPass.password);
} else {
    alert("username not find! sign up!");
}
*/
/*
// eval in js
alert(eval("((8 + 2) / 4) * 5 - 0.5"));
*/
/*
// setInterval and clearInterval

var i = 10;
var timer = setInterval(function () {
    if (i === 0)
        clearInterval(timer);
    console.log(i);
    i--;
}, 1000);

// exercise ep: 92
var userMin = +prompt("min: ");
var userSec = +prompt("sec: ");
var userTimer = setInterval(function () {
    if (userSec === -1) {
        userMin--;
        userSec = 59;
    }
    if (userSec === 0 && userMin === 0) {
        clearInterval(userTimer);
        alert("End");
    }
    if (userMin < 10 && userSec < 10) {
        console.log("0" + userMin + ":" + 0 + userSec);
    } else if(userSec < 10) {
        console.log(userMin + ":" + 0 + userSec);
    } else if (userMin < 10) {
        console.log("0" + userMin + ":" + userSec);
    } else {
        console.log(userMin + ":" + userSec);
    }
    userSec--;
}, 1000);
*/
/*
// Boolean();

var username = prompt("your username : ");
alert(Boolean(username));
if (username) {
    alert("your username: " + username);
} else {
    alert("can\'t empty!!!");
}
console.log("not empty: " + Boolean(" not empty "));
console.log("\" \": " + Boolean(" "));
console.log("\"\": " + Boolean(""));
console.log("undefined: " + Boolean(undefined));
console.log("-1 (not \"0\"): " + Boolean(-1));
console.log("0: " + Boolean(0));
console.log("{} (object): " + Boolean({}));
console.log("[] (array): " + Boolean([]));
*/
/*
// setTimeout();

setTimeout(function (num1, num2) {
    console.log(num1 + num2);
}, 5000, 14, 6); // time(ms), num1, num2...

// exercise ep: 95 // Flag
var profileFlag = false;
setTimeout(function () {
    if (!profileFlag) {
        alert("upload profile")
    }
}, 5000);
*/
/*
// hosting

// var hosting but var value no
hostingVar1 = 10;
console.log("hostingVar1: " + hostingVar1 + "\nhostingVar2: " + hostingVar2);
var hostingVar1, hostingVar2 = 20;
// function hosting but function in var no
hostingFunction();
function hostingFunction() {
    console.log("hostingFunction: " + 30);
}
hostingFunction2();
var hostingFunction2 = function () {
    console.log("hostingFunction2: " + 40);
}
*/
/*
// var let const

var1 = 10;
{
    var var1 = 10.1;
    var var2 = 10.2;
    console.log("var : " + var1);
}
console.log("var : " + var1);
console.log("var : " + var2);
var var1;
console.log("قابلیت هاستینگ داره\nمیشه متغیر همنام تعریف کرد\nکلا بصورت گلوبال هست و منحصر به بلاکی که توش تعریف شده نیست\n");
// 
let let1 = 20;
console.log("let: " + let1);
{
    let let1 = 20.1
    console.log("let: " + let1);
}
console.log("قابلیت هاستینگ نداره\nنمیشه متغیر همنام تعریف کرد\nمنحصر به بلاکیه که توش تعریف شده\n");
// 
const const1 = 30;
console.log("const: " + const1);
console.log("توی همه چیز شبیه لت هست با این تفاوت که نمیشه بدون مقدار ازش استفاده کرد و ثابته یعنی نمیشه مقدار اولیه اش رو آپدیت کرد.");
*/