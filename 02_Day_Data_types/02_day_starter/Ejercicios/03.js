console.log('Exercises: Level 3')

// 01
let sentence5 = "Love is the best thing in this world. Some found their love and some are still looking for their love"
console.log((sentence5.match(/love/gi).length))

// 02
let sentence6 = "You cannot end a sentence with because because because is a conjunction"
console.log((sentence6.match(/because/gi).length))

// 03
const sentence7 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let sentenceClean = sentence7.replace(/[^a-zA-Z . \d]/g, "")
console.log(sentenceClean);


// 04
let sentence8 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let incomes = sentence8.match(/\d+/g, " ")
console.log(incomes);
let totalIncome = parseInt(incomes[0]*12) + parseInt(incomes[1]) + parseInt(incomes[2]*12)
console.log(totalIncome);

