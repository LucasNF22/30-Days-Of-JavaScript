
//alert('Open the browser console whenever you work on JavaScript')
//alert('Open the console and check if the countries has been loaded')

console.log('Exercises: Level 1')

//01
let arr1 = []

//02
let arr2 = [0,2,4,6,8,10,12]

//03
console.log(arr2.length);

//04
let firstItem = arr2[0]
let middleItem = arr2[Math.floor((arr2.length)/2)]
let lastItem = arr2[arr2.length-1]

console.log(firstItem, middleItem, lastItem);

//05
let mixedDataTypes = ["string", 05, undefined, NaN, [0,1,2], null]

console.log(mixedDataTypes.length);

//06
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//07
console.log(itCompanies);

//08
console.log(`Number of companies: ${itCompanies.length}`);

//09
console.log(itCompanies[0], itCompanies[Math.floor((itCompanies.length)/2)], itCompanies[itCompanies.length-1]);

//10
console.log(itCompanies.toString());

//11
console.log("-------");
let companiesUc = itCompanies.toString().toUpperCase().split(",")
console.log(companiesUc);

//12
//console.log(`${(itCompanies.splice(0,itCompanies.length-1)).join(", ")} and ${itCompanies[itCompanies.length-1]} are big companies`)

//13
let companySearch = "Facebook"
itCompanies.includes(companySearch) ? console.log(companySearch) :  console.log("Company not found");;

//14

//15
console.log(itCompanies.sort());

//16
console.log(itCompanies.reverse());

//17
//console.log(itCompanies.splice(0,3));

//18
//console.log(itCompanies.splice(itCompanies.length-3, 3));

//19
//console.log(itCompanies.splice(itCompanies.length/2, 1));

//20
//itCompanies.shift()
//console.log(itCompanies);

//21
//itCompanies.splice(itCompanies.length/2, 1)
//console.log(itCompanies);

//22
//itCompanies.pop()
//console.log(itCompanies);

//23
//itCompanies = itCompanies.splice()
//console.log(itCompanies);

console.log('Exercises: Level 2')

//01
console.log(countries)
console.log(webTechs);

//02
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

text = text.replace(/[,.]/g, "")

text = text.split(" ")

console.log(text.length);

//03
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart[0] != "Meat" ? shoppingCart.unshift("Meat") : ""

shoppingCart[shoppingCart.length-1] != "Sugar" ? shoppingCart.push("Sugar") : ""

console.log(shoppingCart);

let allergicToHoney = true

let honeyIndex = shoppingCart.indexOf("Honey")

allergicToHoney ? shoppingCart.splice(honeyIndex, 1) : ""

console.log(shoppingCart);

//04
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"
console.log(shoppingCart);

//05
let checkCountry = "Ethiopia"
countries.indexOf(checkCountry) != -1 
? console.log(countries[countries.indexOf(checkCountry)].toUpperCase()) 
: countries.push(checkCountry) 

//06
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack);

console.log('Exercises: Level 3')

//01
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//A 
ages.sort()
let minAge= ages[0]
let maxAge = ages[ages.length-1]
console.log(minAge, maxAge);

//B
console.log(ages.length%2);
let agesArr
let medianAge

ages.length % 2 === 0 
? agesArr = ages.splice(Math.floor((ages.length-1)/2), 2 )
: agesArr = ages.splice(Math.floor((ages.length-1)/2), 1 )

agesArr.length === 1 
? medianAge = agesArr[0]
: medianAge = (agesArr[0] + agesArr[1])/2

console.log(agesArr);
console.log(medianAge);

//C
let averageAge = (ages.reduce(function(valorAnterior, valorActual){
    return valorAnterior + valorActual;
  }))/ages.length
console.log(averageAge);

//D
let ageRange = ages[ages.length-1]-ages[0]
console.log(ageRange);

//C

//2
let tenCountrys = countries.slice(0,10)
console.log(tenCountrys);

//3
console.log(countries.length%2);
let countryArr
let medianCountry
/*
countries.length % 2 === 0 
? countryArr = countries.splice(Math.floor((countries.length-1)/2), 2 )
: countryArr = countries.splice(Math.floor((countries.length-1)/2), 1 )

console.log(countryArr);
*/
//4
console.log("-----------");
let countriesArr1 
let countriesArr2

console.log(countries.length);

countries.length % 2 === 0 
? countriesArr1 = countries.splice(countries[0], (countries.length)/2 )
: countriesArr1 = countries.splice(countries[0], ((countries.length)/2)+1 )

countriesArr2 = countries.splice(countries[0], countries.length)


console.log("arr1: "+countriesArr1.length);
console.log("arr2: "+countriesArr2.length);

//console.log(countriesArr1);
//console.log(countriesArr2);
