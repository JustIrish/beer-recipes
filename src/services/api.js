import axios from 'axios';

axios.defaults.baseURL = 'https://api.punkapi.com';

export const fetchBeerRecipes = async page => {
  const response = await axios.get(`/v2/beers?page=${page}`);
  return response.data;
};
