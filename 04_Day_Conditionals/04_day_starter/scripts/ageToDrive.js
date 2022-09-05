let userAge = prompt("Enter your age")

if (userAge >= 18){
    console.log("You are old enough to drive.");
}else{
    let yearsToDrive = 18 - userAge
    console.log(`You are left with ${yearsToDrive} years to drive.`);
}