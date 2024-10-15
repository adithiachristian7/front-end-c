// Array Exercise 
// let people = ["Greg", "Mary", "Devon", "James"];

// //1. menggunakan for-loop
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// //2. menggunakan forEach
// people.forEach(function (name) {
//     console.log(name);
// });

// //3. menghapus Greg dari array
// people.shift()
// console.log(people);

// //4. menghapus James dari array
// people.pop()
// console.log(people);

// //5. menambahkan Matt kedalam array
// people.unshift("Matt")
// console.log(people);

// //6. menambahkan nama kita kedalam array
// people.push("Adith")
// console.log(people);

// //7. 
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
//     if (people[i] === "Mary"){
//         break;
//     }      
// }

// //8. salinan array menggunakan irisan
// let newPeople = people.slice(1,4)
// console.log(newPeople)

// //9.
// people.splice(2,1, "Elizabeth", "Artie")
// console.log(people)

// //10.
// let withBob = people.concat("Bob")
// console.log(withBob)    


// Object Exercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChalenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1 tambahkan perintah bahasa go ke akhir array bahasa
programming.languages.push("Go")
console.log(programming.languages);

//2. notasi braket untuk mengubah difficulty ke 7
programming["difficulty"] = 7
console.log(programming);

//3. hapus jokes
delete programming.jokes
console.log(programming);

//4. notasi titik untuk menambah isFun ke object
programming.isFun = true
console.log(programming); 

//5. menggunakan map

programming.languages.map(function(v, i) {
    console.log(i + "-" + v);
})

