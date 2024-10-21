

export const DataUserAxios = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    const { data } = response.data;

    data.forEach(({ first_name, last_name }) => {
      console.log(`${first_name} ${last_name}`);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
