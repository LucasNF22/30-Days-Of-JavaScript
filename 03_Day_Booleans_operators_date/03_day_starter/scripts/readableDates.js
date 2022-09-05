

let yearDate = now.getFullYear()
let monthDate = now.getMonth()
let dayDate = now.getDay()
let hoursDate = now.getHours()
let minutesDate = now.getMinutes()

let dateV1 = `${yearDate}-${monthDate}-${dayDate} ${hoursDate}:${minutesDate}`
let dateV2 = `${dayDate}-${monthDate}-${yearDate} ${hoursDate}:${minutesDate}`
let dateV3 = `${dayDate}/${monthDate}/${yearDate} ${hoursDate}:${minutesDate}`

console.log(dateV1);
console.log(dateV2);
console.log(dateV3);

//LVL 3

let hoursLVL3 
let minutesLVL3

hoursDate < 10
? hoursLVL3 = `0${hoursDate}` 
: hoursLVL3 = hoursDate

minutesDate < 10
? minutesLVL3 = `0${minutesDate}` 
: minutesLVL3 = minutesDate

let dateV4 = `${yearDate}-${monthDate}-${dayDate} ${hoursLVL3}:${minutesLVL3}`

console.log(dateV4);