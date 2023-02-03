const catAPI = {
  getImage: async function () {
    const call = await fetch("https://api.thecatapi.com/v1/images/search");
    const res = await call.json();

    return res;
  }
};

export default catAPI;
