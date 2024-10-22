// Rest Parameter dan Spread Operator

// 1. Rest Parameter.

// fungsi tanpa rest parameter
const function1 = (param1, param2, param3, param4, param5) => {
    console.log(param1, param2, param3, param4, param5);
};

function1 ('a', 'b', 'c', 'd', 'e');

// fungsi dengan rest parameter.
const function2 = (...params) => {
    console.log(params);
};

function2 ('a', 'b', 'c')

// rest parameter harus berada di terakhir dalam parameter list
const function3 = (param1, param2, ...params) => {
    console.log(param1, param2, params);
};  

function3 ('A', 'B', 'c', 'd', 'e')

// mini exercise

const penjumlahan = (...params) => {
    let hasil = 0;
    params.forEach((i) => (hasil += i));
    console.log(hasil);  
    return hasil    

}
penjumlahan (1,2,3,4,5,6)


// 2. spread operator.   
let angka = [1,2,3,4,5]
console.log(...angka)

// fungsi spread operator
// Array
// 1. Duplikasi array
let angka2 = [...angka];
angka2.push(6);
console.log(angka2);

// 2. Menggabungkan array
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let numbers5 = [...arr1, ...arr2, ...arr3];     //ES6
console.log(numbers5);


// Object
// 1. Duplikasi object
const john = {
    fullName : 'John Doe',
    age : 30
};

const john2 = {...john, address : 'Manado'}; 
console.log(john2)

// 2. mengabungkan object
let obj1 = {a : 1, b : 2};
let obj2 = {c : 3, d : 4};  
let obj3 = {e : 5, f : 6};

let combined = {...obj1, ...obj2, ...obj3};
console.log(combined);