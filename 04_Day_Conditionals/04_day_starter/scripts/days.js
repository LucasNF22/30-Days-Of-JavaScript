let day = prompt("What is the day today?")

day = day.toLowerCase()

console.log(day);

if ( day == "monday" || day == "tuesdey"  || day == "wednesday" || day == "thrusday" || day == "fryday" ){
    console.log(`${day} is a working day`);
}else if( day == "saturday" || day == "sunday" ){
    console.log(`${day} is a weekend`);
}else{
    console.log(`${day} is not a day`);
}
     

let dato = new Date(2024, 2, 0).getDate();
console.log(dato);