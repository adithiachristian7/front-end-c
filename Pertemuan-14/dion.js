// Nomor 1 Destructuring dengan menggunakan default value 
const calculateAge = (birthYear) => 2019 - birthYear;
const yearUntilRetirement = ({ year, firstName = "Anonymous" }) => {
  const age = calculateAge(year);
  const retierment = 60 - age;

  if (retierment > 0) {
    console.log(`${firstName} retires in ${retierment} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};
yearUntilRetirement({ year: 1987, firstName: "John" });


// Nomor 2 Destructuring dengan menggunakan rest operator
const addNumber = (...numbers) => {
  const [first, second, ...restNumbers] = numbers;
  let sum = first + second;
  for (let num of restNumbers) {
    sum += num;
  }
  return sum;
};
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));


// Nomor 3 Destructuring dengan mengambil sebagian item
const phi = 3.14;
const power = 2;

const calculateArea = ({ radius = 1 }) => phi * Math.pow(radius, power);
let radius = 21;
const area21 = calculateArea({ radius });
console.log(`Area with 21 radius: ${area21}`);

radius = 7;
const area7 = calculateArea({ radius });
console.log(`Area with 7 radius: ${area7}`);


// Nomor 4 Destructuring dengan menggunakan default value
const makeAjaxRequest = ({ url, method = "GET" }) => {
  console.log(`url: ${url}, Method: ${method}`);
};
makeAjaxRequest({ url: "www.google.com" });
