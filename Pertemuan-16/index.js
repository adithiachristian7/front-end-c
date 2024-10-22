// Asynchronous JS



// Synchronous JS -> Single thread -> blocking


// Asynchronous -> Multithreaded -> non-blocking
// 1. Parallel
// setTimeout(() => {
//     console.log('Proses 1');
// },3000);
// console.log('Proses 2');
// setTimeout(() => {
//     console.log('Proses 3');
// },3000);


// 2. Concurent
// setTimeout(() => {
//     console.log('Proses 1')
//     setTimeout(() => {
//         console.log('Proses 2')
//         setTimeout(() => {
//             console.log('Proses 3') 
//             setTimeout(()=>{
//                 console.log('Proses 4')
//             },3000)
//         },3000) 
//     },3000)    
// },3000)


// Promise

// let condition = false;
// let newPromise = new Promise((resolve,reject)=> {
//     if(condition){
//         resolve('Berhasil');
//     }else{
//         reject('Gagal');
//     }
// });

// pakai promise
// 1.then - catch
// newPromise
//     .then((result) => result )
//     .then((result2) => console.log(result2))
//     .catch((error) => console.log(error))

// 2. Async - await
// Harus dibuat dalam fungsi

// const consumePromise = async () => {
//     try {
//         let result = await newPromise;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
//     let result = await newPromise;
//     console.log(result);
// }

// consumePromise();


// Pakai promise yang sudah ada

// 1. Fetch
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => console.log(json))


// ubah ke Async - await
const consumePromise = async () => {    
    let result = await fetch('https://jsonplaceholder.typicode.com/users')
    let json = await result.json()
    json.forEach(({name}) => console.log(name))
    console.log(json)
}
consumePromise()