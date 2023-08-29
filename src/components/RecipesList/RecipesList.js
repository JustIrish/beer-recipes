import { useEffect } from 'react';
import useBeerStore from '../../zustand/store';
// import { shallow } from 'zustand/shallow';
// import { compare } from 'zustand/vanilla';

import RecipeCard from './RecipeCard';
import { List } from './RecipesList.styled';

const RecipesList = () => {
  const recipes = useBeerStore(state => state.recipes);
  const lazyLoadBeer = useBeerStore(state => state.lazyLoadBeer);
  // const changePage = useBeerStore(state => state.changePage);

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

  // if (recipes.lenght < 15) {
  //   changePage();
  // }

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
