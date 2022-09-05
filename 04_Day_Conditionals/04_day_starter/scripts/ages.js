let myAge = 30
let yourAge = prompt("Entrer your age")
let ageDif

if ( myAge < yourAge ){
    ageDif = yourAge - myAge 
    console.log(`You are ${ageDif} years older than me.`);
}else if(myAge > yourAge){
    ageDif = myAge - yourAge
    console.log(`I am ${ageDif} years older than you.`);
}else{
    console.log("We are the same age");
}

