// messages.js
import { helloWorld } from './helloWorld.js'; // Mengimpor fungsi helloWorld

const messages = async () => {
  const { msg } = await helloWorld(); // Destructure object yang dikembalikan
  console.log(msg); // Menampilkan pesan di console
};

messages(); // Memanggil fungsi messages
