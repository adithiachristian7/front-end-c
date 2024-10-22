// Nomor 1
export const calculateAge = (birthYear) => 2019 - birthYear;

export const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

// Nomor 2
export const addNumber = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

// Nomor 3
export const calculateArea = ({ radius }) => {
  const phi = 3.14;
  const power = 2;
  return phi * Math.pow(radius, power);
};

// Nomor 4
export const makeAjaxRequest = (url, method = "GET") => {
  console.log(url, method);
};