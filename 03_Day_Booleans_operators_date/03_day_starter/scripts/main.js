// this is your main.js script
console.log('Exercises: Level 1')

//01
let firstName = "Lucas"
let lastName = "Fiorentino"
let country = "Argentina"
let age = 30
let isMarried = false
let year = 1992

console.log("-- 01 --")
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//02
console.log("-- 02 --")
console.log("10" == 10)

//03
console.log("-- 03 --")
console.log(parseInt("9.8") == 10)

//04
console.log("-- 04 --")
console.log(4 < 10);
console.log("car".length == "cat".length);
console.log(2 == "2");

console.log(2 > 8);
console.log(2 === "2");
console.log("house" >= 10);

//05
console.log("-- 05 --")

// 4 > 3    true
// 4 >= 3   true
// 4 < 3    false
// 4 <= 3   false
// 4 == 4   true
// 4 === 4  true
// 4 != 4   false
// 4 !== 4  false
// 4 != '4' false
// 4 == '4' true
// 4 === '4' false
// Find the length of python and jargon and make a falsy comparison statement. !(6 == 6) = false

console.log(4 > 3)
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log("---");
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log(!("python".length == "jargon".length));

//06
console.log("-- 06 --")

// 4 > 3 && 10 < 12     true
// 4 > 3 && 10 > 12     false
// 4 > 3 || 10 < 12     true
// 4 > 3 || 10 > 12     true
// !(4 > 3)             false
// !(4 < 3)             true
// !(false)             true
// !(4 > 3 && 10 < 12)  false
// !(4 > 3 && 10 > 12)  true
// !(4 === '4')         true
// There is no 'on' in both dragon and python false

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false) );
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));


console.log(!("python".includes("on") && "dragon".includes("on")));

//07
console.log("-- 07 --")
const now = new Date()
let presentYear = now.getFullYear()
let presentMonth = now.getMonth()
let presentDate = now.getDate()
let presentDay = now.getDay()
let PresentHour = now.getHours()
let presentMinutes = now.getMinutes()
let secondsToNow = now.getTime()/1000

console.log(presentYear);
console.log(presentMonth);
console.log(presentDate);
console.log(presentDay);
console.log(PresentHour);
console.log(presentMinutes);
console.log(secondsToNow);


console.log('Exercises: Level 2')

//01
//scripts -> triangleArea

//02
//scripts -> trianglePerimeter

//03
//scripts -> rectangle

//04
//scripts -> circle

//05


//09
//scripts -> rate

//10
let nameLength = "Lucas"

nameLength.length > 7 ? console.log("your name is long") : console.log("your name is short"); 

//11
let miFirstName = "Lucas"
let miLastName = "Fiorentino"

miFirstName.length < miLastName.length 
? console.log(`Your first name, ${miFirstName} is shorter than your family name, ${miLastName}`)
: console.log(`Your first name, ${miFirstName} is longer than your family name, ${miLastName}`)

//12
let myAge = 250
let yourAge = 25

let ageDifference = myAge - yourAge

console.log(`I am ${ageDifference} years older than you.`);

//13
//scripts -> ageToDrive

//14
//scripts -> yearsToSeconds

//15
////scripts -> readableDates



