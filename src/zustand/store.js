import { create } from 'zustand';

import { fetchBeerRecipes } from '../services/api';

const useBeerStore = create(set => ({
  recipes: [],
  fetchRecipes: async () => {
    set({ recipes: await fetchBeerRecipes() });
  },
}));

export default useBeerStore;
