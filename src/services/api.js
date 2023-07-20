import axios from 'axios';

axios.defaults.baseURL = 'https://api.punkapi.com';

export const fetchBeerRecipes = async () => {
  const response = await axios.get(`/v2/beers?page=1`);
  return response.data;
};
