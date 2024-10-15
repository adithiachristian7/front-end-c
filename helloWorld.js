export const helloWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
};

export const messages = async () => {
  const result = await helloWorld();
  console.log(result);
};
