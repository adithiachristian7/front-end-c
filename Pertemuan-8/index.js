// JavaScript Loop & Array build in method

// // JavaScript Loop
// // 1. For Loop
// for (let i=1; i<=10; i++) {
//     console.log(i)
// }

// // 2. While Loop
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// // 3. Do While Loop
// let j = 1;
// do {
//     console.log(j);
//     j++;
// } while (j <= 10);


//------------------------------------------------------------------//

// Array build in method
// let number = [1, 2, 3, 4, 5,];
// console,log(number);    // Output [1, 2, 3, 4, 5] menampilkan sekaligus

// menampilkan element array satu per satu
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }

// Array Object
let students = [
    {
        id: 1,
        firstName: "John",
        isActive: false,
        grade: 80,
    },
    {
        id: 2,
        firstName: "Jane",
        isActive: true,
        grade: 90,
    },  
    {
        id: 3,
        firstName: "Joe",
        isActive: false,
        grade: 100,
    },
];


// cara lama
// for (let i=0; i < students.length; i++) {
//     console.log(students[i]);
// }


// 1. forEach()
// students.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
//     console.log(item.firstName)
// }); 

// 2. map(
// students.map(function(item){
//     console.log(item)
// });


// let output = students.map(function(item){
//     return item;
// });
// console.log(output)

// 3. filter()      untuk mencari data di dlm array     output array
// let filteredStudents = students.filter(function(item){
//     return item.grade > 80;
// });
// console.log(filteredStudents)

// 4. find()        cuma untuk 1 value output objek
let output = students.find(function(item){
    return item.grade > 80;
});
console.log(output)

// 5. findIndex()

