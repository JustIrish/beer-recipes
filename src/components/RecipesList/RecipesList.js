import { useEffect } from 'react';
import useBeerStore from '../../zustand/store';
import { shallow } from 'zustand/shallow';

import RecipeCard from './RecipeCard';
import { List } from './RecipesList.styled';

const RecipesList = () => {
  const { recipes, lazyLoadBeer } = useBeerStore(
    ({ recipes, lazyLoadBeer, loadMoreRecipes }) => ({
      recipes,
      lazyLoadBeer,
      loadMoreRecipes,
    }),
    shallow
  );

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
