import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { fetchBeerRecipes } from '../services/api';

const useBeerStore = create()(
  devtools(
    immer(set => ({
      recipes: [],
      selectedCard: [],
      fetchRecipes: async () => {
        set({ recipes: await fetchBeerRecipes() });
      },
      addSelectedCard: id => {
        set(state => {
          if (state.selectedCard.includes(id)) return;
          state.selectedCard.push(id);
        });
      },
      removeFromSelectedCard: id => {
        set(state => {
          const idx = state.selectedCard.indexOf(id);
          state.selectedCard.splice(idx, 1);
        });
      },
    }))
  )
);

export default useBeerStore;
