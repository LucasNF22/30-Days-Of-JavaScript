let now = new Date()
let limitYear = now.getFullYear()
let userBYear = prompt("Enter birth year")
let userAge = limitYear - userBYear
let yearsRemaining

userAge < 18 
? yearsRemaining = 18 - userAge 
: yearsRemaining = 0 

userAge >= 18 
? console.log(`You are ${userAge}. You are old enough to drive`)
: console.log(`You are ${userAge}. You will be allowed to drive after ${yearsRemaining} years.`);
