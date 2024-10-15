// // JavaScript Objek
// // Deklarasi objek

// // Cara 1. Object literal
// let john = {
//     firstName: "John",
//     age: 30,
//     isMarried: true, 
//     grade: [80, 90, 100],
//     sayGreeting: function () {
//         console.log("Hello, my name is " + this.firstName); 
//     },
//     address: { // Ganti "addres" menjadi "address"
//         street: "Jl. Arnold Mononutu",
//         city: "Minahasa Utara",
//         province: "Sulawesi Utara", 
//         postalCode: 95371
//     },
// };
// console.log(john);

// // Cara 2
// // let jane = new Object();
// // jane.firstName = "Jane";
// // jane.age = 25;
// // jane.isMarried = false;

// // console.log(jane)

// // Cara mengakses properti dalam objek
// // 1. Dot notation

// console.log(john.firstName);
// console.log(jane.age);

// // merubah properti dalam objek
// john.age = 31;
// console.log(john.age);

// // menambah properti baru
// john.lastName = "Doe";
// console.log(john);


// // 2. Bracket notation
// john["nationality"] = "Indonesia";
// console.log(john)

// // Object method
// john.sayGreeting()

// // Object inside object
// console.log(john.address.city)

// // Delete properti dalam objek
// delete john.grade
// console.log(john)


// JAVASCRIPT CONDITIONAL

// 1. if - else
// let numbers = 10;
// if (numbers % 2 === 0) {
//     console.log("angka genap");
// } else {
//     console.log("angka ganjil");
// }   

// // 2. if - else if - else
// let nilai = 70;
// if (nilai >= 80) {
//     console.log("nilai A");
// } else if (nilai >= 60) {
//     console.log("nilai B");
// } else {
//     console.log("nilai C");
// }


// switch case
let month = 1;
switch (month) {
    case 1:
        console.log("januari");
        break;
    case 2:
        console.log("februari");
        break;
    case 3:
        console.log("maret");
        break;
    default:
        console.log("bukan bulan");
}

