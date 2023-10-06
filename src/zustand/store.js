import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { fetchBeerRecipes } from '../services/api';

const useBeerStore = create()(
  devtools(
    immer(set => ({
      recipes: [],
      loading: false,
      error: null,
      selectedCard: [],
      selectedRecipe: {},
      page: 1,
      fetchRecipes: async page => {
        set({ loading: true });
        try {
          set({
            recipes: await fetchBeerRecipes(page),
          });
        } catch (e) {
          set({ error: e.massage });
        } finally {
          set({ loading: false });
        }
      },
      loadMoreRecipes: async () => {
        set({ loading: true });
        try {
          const { page, recipes } = useBeerStore.getState();
          const nextPage = page + 1;
          const newRecipes = await fetchBeerRecipes(nextPage);
          set({
            recipes: [...recipes, ...newRecipes],
            page: nextPage,
          });
        } catch (e) {
          set({ error: e.massage });
        } finally {
          set({ loading: false });
        }
      },
      toggleBeerCards: id => {
        set(state => {
          if (state.selectedCard.includes(id)) {
            const { selectedCard } = state;

            const filteredId = selectedCard.filter(item => item !== id);
            return { selectedCard: filteredId };
          } else {
            state.selectedCard.push(id);
          }
        });
      },
      lazyLoadBeer: () => {
        set(state => {
          const newRecipes = state.recipes.slice(5);
          return { recipes: newRecipes };
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
