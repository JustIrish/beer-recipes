import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { fetchBeerRecipes } from '../services/api';

const useBeerStore = create()(
  devtools(
    immer(set => ({
      recipes: [],
      selectedCard: [],
      selectedRecipe: {},
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
          const { selectedCard } = state;

          const filteredId = selectedCard.filter(item => item !== id);
          return { selectedCard: filteredId };
        });
      },
      deleteRecipes: () => {
        set(state => {
          const { recipes, selectedCard } = state;

          const filteredRecipes = recipes.filter(
            recipe => !selectedCard.includes(recipe.id)
          );
          return { recipes: filteredRecipes, selectedCard: [] };
        });
      },
      getRecipeById: recipeId => {
        set(state => {
          const recipe = state.recipes.find(({ id }) => id === recipeId);

          return { selectedRecipe: recipe };
        });
      },
    }))
  )
);

export default useBeerStore;
