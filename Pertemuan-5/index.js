// IIFE & Callback

//1. IIFE (Immediately Invoked Function Exprresion)

//No parameter & argumen & return value
// (function (){
//     console.log("Hello World")
// })()

// //with parameter & argumen & return value
// let output = (function (fullName){
//     return 'Hello'+' '+fullName
// })('Adith')
// console.log(output)



//2. Callback function (no parameter & arg & return value)
//#1
// function sayHello(callback){
//     callback()
// }

// function greetings(){
//     console.log('Hello callback function')
// }

// sayHello(greetings)


// //#2
// function sayHello(callback){
//     callback()
// }

// sayHello(function (){
//     console.log('Hello callback function')
// })



// Callback function (with parameter & arg & return value)
function sayHello(callback){
    let output = callback('Adithia')
    return output
}

let output = sayHello(function (fullName){
    return 'Hello' + ' '+fullName
})


