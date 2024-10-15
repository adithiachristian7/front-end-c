// Array & Object
// 1. Array
// // Deklarasi variable array
// // Cara 1 (Array litera)
// let numbers = [1,2,3,4,5];
// console.log(numbers);
// // Cara 2 (kata kunci new)
// let numbers2 = new Array(6,7,8,9,10);
// console.log(numbers2);

// Tipe data dalam array
// let numbers = [1,2,3,4,5]; //tipe data angka / numbers
// let students = ['adit', 'jo',] //tipe data string
// let adit = ['Adithia', 20, true,[80,90]] //tipe data campuran
// console.log(adit)

// Array length (mengambil panjang array)
// console.log(numbers.length)
// console.log(students.length)
// console.log(adit.length)

// Mengakses element tertentu dalam array 
// Melalui index
// console.log(adit[3]) // kurung siku buat mengakses index

//Mengakses element terakhir dalam array
// let numbers = [1,2,3,4,5,6,7,8,9,10]
// console.log(numbers[numbers.length -1]) //10

// Array method
// let array = [1,2,3,'hallo',false,true]
// console.log(array)
// // 1. to string
// console.log(array.toString())   //menggunakan method toString (merubah menjadi string)
// // 2. join
// console.log(array.join(' '))
// // 3. pop (mengahapus element terakhir)
// array.pop()
// console.log(array.join(' '))
// // 4. push (menambah element di paling terakhir)
// array.push('hallo')
// console.log(array)
// // 5. shift (menghapus element paling depan)
// array.shift()
// console.log(array)
// // 6. Unshift (menambah element di depan)
// array.unshift('Hi')
// console.log(array)
// // 7. splice
// array.splice(3,0,4,5)
// console.log(array)
// // 8. concatination (menggabungkan array menjadi 1 array)
// let buah = ['pisang', 'apel', 'jeruk']
// let sayur = ['tomat', 'bayam', 'wortel']
// let biji = ['kedelai', 'kacang tanah', 'kacang polong']

// let makanan = buah.concat(sayur,biji)
// console.log(makanan)
// // 9. slice (digunakan untuk mengambil beberapa element untuk ditaro pd array baru)

// let sayuran = makanan.slice(3,6) // index start, stop(tanpa diikutsertakan)
// console.log(sayuran)


//------------------------------------------------------------------------------------------------------------//

// Objek ??
