// PROMISE

// export const helloWorld = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ msg: "Hello World!" });
//       }, 2000);
//     });
//   };
  
//   const messages = async () => {
//     const { msg } = await helloWorld(); 
//     console.log(msg);
//   };
  
//   messages();


  // helloWorld.js
export const helloWorld = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    });
  };
  
  // Menghapus fungsi messages dari file ini, karena akan diimpor di file lain
  
  