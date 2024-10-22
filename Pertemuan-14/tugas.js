// mengubah menggunakan Konsep destructuring

// Nomor 1 Destructuring dengan menggunakan default value 
const calculateAge = (birthYear) => 2019 - birthYear
// Fungsi ini menerima objek sebagai argumen, kemudian menggunakan destructuring 
// untuk mengekstrak nilai 'year' dan 'firstName' dari objek tersebut
const yearUntilRetirement = ({year, firstName}) => {
	let age = calculateAge(year);
	let retirement = 60 - age;

 console.log(retirement > 0 ? `${firstName} retires in ${retirement} years` : `${firstName} is already retired.`)
}

yearUntilRetirement({year: 1987, firstName: 'John'});

// Nomor 2 Destructuring dengan menggunakan rest operator
const addNumber = (...numbers) => {
 	let sum = 0;
    numbers.map((v) => sum+= v)
 	return sum;
}
console.log(addNumber(1,2,3,4,5,6,7));

// Nomor 3 Destructuring dengan mengambil sebagian item
let phi = 3.14;
let power = 2;
let radius = 0;

// Fungsi untuk menghitung area dengan menggunakan destrukturisasi
const calculateArea =  ({radius, power}) => phi * Math.pow(radius, power);
// Pada parameter fungsi, kita menggunakan destrukturisasi untuk langsung mengambil nilai 'radius' dan 'power' dari objek yang diterima

radius = 21;
let area21 = calculateArea({radius: radius, power: 2 });

radius = 7;
let area7 = calculateArea({radius: radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ' ${area7}`);

// Nomor 4 Destructuring dengan menggunakan default value
const makeAjaxRequest = ({ url, method = "GET" }) => {
    console.log(`url: ${url}, Method: ${method}`);
  };
  makeAjaxRequest({ url: "www.google.com" });