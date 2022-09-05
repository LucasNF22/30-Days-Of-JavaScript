// this is your main.js script

//alert('Open the browser console whenever you work on JavaScript')

//01
//Scripts -> ageToDrive

//02
//Scripts -> ages

//03
let a = 4
let b = 3

if (a > b){
    console.log(`${a} is greater than ${b}`);
}else{
    console.log(`${a} is less than ${b}`);
}

a>b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);

//4
//Scripts -> evenOrOdd

console.log('Exercises: Level 2')

//01
let score = 95

switch (true){
    case (score >= 0 && score <= 49): 
    console.log("The grade is F")
    break

    case (score >= 50 && score <= 59): 
    console.log("The grade is D")
    break

    case (score >= 60 && score <= 69): 
    console.log("The grade is C")
    break

    case (score >= 70 && score <= 89): 
    console.log("The grade is B")
    break

    case (score >= 90 && score <= 100): 
    console.log("The grade is A")
    break

    default: 
    console.log('The score is not correct');
}

//02
let month = "febrUary"
month = month.toLowerCase()

if (month == "september" || month == "october" || month == "november" ){
        console.log("the season is Autum");
    }else if(month == "december" || month == "january" || month == "february" ){
        console.log("the season is Winter");
    }else if(month == "march" || month == "april" || month == "may" ){
        console.log("the season is Spring");
    }else if(month == "june" || month == "july" || month == "august" ){
        console.log("the season is Summer");
    }

//03
//Scripts -> days

console.log('Exercises: Level 3')

//03
let now = new Date()
let currentYear = now.getFullYear()

let leapYear = currentYear%4===0 ?  true : false

if (month == "january" || month == "march" || month == "may" || month == "july" || month == "august" || month == "october" || month == "december"){
    console.log(`${month} has 31 days`);
}else if(month == "february" && leapYear === true ){
    console.log(`${month} has 29 days`);
}else if(month == "february" && leapYear === false ){
    console.log(`${month} has 28 days`);
}else if(month == "april" || month == "june" || month == "september" || month == "november"){
    console.log(`${month} has 30 days`);
}

