import { useEffect } from 'react';
import useBeerStore from '../../zustand/store';
import {
  getRecipes,
  getRecipesLength,
  getLazyLoadBeer,
  getLoadMoreRecipes,
} from '../../zustand/selectors';
// import { shallow } from 'zustand/shallow';
// import { compare } from 'zustand/vanilla';

import RecipeCard from './RecipeCard';
import { List } from './RecipesList.styled';

const RecipesList = () => {
  const recipes = useBeerStore(getRecipes);
  const recipesLength = useBeerStore(getRecipesLength);
  const lazyLoadBeer = useBeerStore(getLazyLoadBeer);
  const loadMoreRecipes = useBeerStore(getLoadMoreRecipes);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight) {
        lazyLoadBeer();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lazyLoadBeer]);

  if (recipesLength <= 15) {
    loadMoreRecipes();
  }

  return (
    <List className="gallery">
      {recipes.map(
        ({ id, ...props }, idx) =>
          idx < 15 && <RecipeCard key={id} id={id} {...props} />
      )}
    </List>
  );
};

export default RecipesList;
