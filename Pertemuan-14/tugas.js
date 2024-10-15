// Konsep destructuring

// 1
const calculateAge = (birthYear) => 2019 - birthYear
// Fungsi ini menerima objek sebagai argumen, kemudian menggunakan destructuring 
// untuk mengekstrak nilai 'year' dan 'firstName' dari objek tersebut
const yearUntilRetirement = ({year, firstName}) => {
	let age = calculateAge(year);
	let retirement = 60 - age;

 console.log(retirement > 0 ? `${firstName} retires in ${retirement} years` : `${firstName} is already retired.`)
}

yearUntilRetirement({year: 1987, firstName: 'John'});

// 2.
const addNumber = (...numbers) => {
 	let sum = 0;
    numbers.map((v) => sum+= v)
 	return sum;
}
console.log(addNumber(1,2,3,4,5,6,7));

// 3.

let phi = 3.14;
let power = 2;
let radius = 0;

const calculateArea =  ({radius, power}) => phi * Math.pow(radius, power);

radius = 21;
let area21 = calculateArea({radius: radius, power: 2 });

radius = 7;
let area7 = calculateArea({radius: radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ' ${area7}`);

// 4.
let makeAjaxRequest = (url, method='GET') => console.log(url, method);

makeAjaxRequest('www.google.com');