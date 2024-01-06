import axios from "axios";

async function fetchCountries() {
  const response = await axios.get(
    "https://linkit-server.onrender.com/resources/countries"
  );
  return response.data;
}

const data = await fetchCountries();

export const countryList = data;
