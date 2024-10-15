// Ubah exercise 1 dari function biasa menjadi IIFE dan Callback

// IIFE
// let bmi = (function(tinggi,berat){
//     let tinggiMeter = tinggi / 100
//     let bmi = berat / (tinggiMeter * tinggiMeter)

//     console.log('Tinggi ='+' '+tinggiMeter + 'm')
//     console.log('berat ='+' '+berat + 'kg')
//     return bmi
// })(170,50)

// console.log('BMI ='+' '+ bmi)


// // Callback
// function bmi(tinggi, berat, callback) {
//     let tinggiMeter = tinggi / 100;
//     let bmi = berat / (tinggiMeter * tinggiMeter);
//     callback(tinggi, berat);
//     return bmi;
//   }
  
//   let output = bmi(170, 50, function (t, b) {
//     console.log(`TINGGI  : ${t} CM`);
//     console.log(`BERAT   : ${b} KG`);
//   });
  
//   console.log(`BMI   : ${output}`)


