//  JavaScript Function

//  cara 1. (Tanpa input (parameter) dan tanpa ouput)
// function greetings1(){
//     console.log('Hello World');
// }
// greetings1();   //call function

// //  cara 2.
// let greetings2 = function(){
//     console.log('Hallo Dunia');
// }
// greetings2();   //call function



//  parameter dan argument
//  Dengan input (parameter) dan output (return value)
// function greetings1(fullName) {
//      return 'Hello' +' '+ fullName;
// }
// let output1 = greetings1('Adith'); //argument (untuk memberikan nilai dalam fungsi)
// console.log(output1);


// let greetings2 = function(fullName) {
//     return 'Hello'+' '+fullName;
// }
// let ouput2 = greetings2('Adithia');
// console.log(ouput2);

//  Global & lokal scope & block scoope
let x = 10; //global

function foo() {
    let y = 20; //lokal
    let z = 30; //lokal
    if (z > x) {
        let a = 40; //block scope (yg di dalam kurung kurawal)
        console.log(a);
    }
    console.log(y);
    console.log(z);
}


