import { yearUntilRetirement, addNumber, calculateArea, makeAjaxRequest } from './utils.js';

// Nomor 1
yearUntilRetirement({ year: 1987, firstName: "John" });

// Nomor 2
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// Nomor 3
let radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// Nomor 4
makeAjaxRequest('www.google.com');

