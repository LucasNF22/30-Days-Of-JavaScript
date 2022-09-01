console.log('Exercises: Level 2')

// 01
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 02
console.log(' \"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"');

// 03
let num = "10"
let numInt = parseInt(num)
console.log(typeof numInt)

// 04
let numfloat = 9.8
console.log(Math.round(numfloat));

// 05
let python = "python"
let jargon = "jargon"
console.log(python.includes('on'), jargon.includes('on'))

// 06
let sentence2 = "I hope this course is not full of jargon"
console.log(sentence2.includes("jargon"))

// 07
let randomNum = Math.random () //0.999
console.log(randomNum)
let numBetween0and100 = randomNum * 101
console.log(numBetween0and100)
let ramndomRound = Math.floor(numBetween0and100)
console.log(ramndomRound);

// 08
let min = Math.ceil(50);
let max = Math.floor(100);
let random50to100 = Math.floor(Math.random() * (max - min + 1) + min);

console.log(random50to100);

// 09
let random0to255 = Math.floor(Math.random () * 256)
console.log(random0to255)

// 10
let string2 = "JavaScript"
let randomInTheString = Math.floor(Math.random () * string2.length)

console.log(string2.charAt(randomInTheString));

// 11
console.log('1\t1\t1\t1\t1\t\n2\t1\t2\t4\t8\t\n3\t1\t3\t9\t27\t\n4\t1\t4\t16\t64\t\n5\t1\t5\t25\t125')

// 12
let sentence3 = 'You cannot end a sentence with because because because is a conjunction'
let sentence4 = "because because because"
console.log(sentence3.substr(sentence3.indexOf(sentence4), sentence4.length ));