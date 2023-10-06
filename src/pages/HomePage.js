import { useEffect } from 'react';
// import { toast } from 'react-hot-toast';
import useBeerStore from '../zustand/store';
import {
  getFetchRecipes,
  getPage,
  getRecipesLength,
  getSelectedCardLength,
} from '../zustand/selectors';

import RecipesList from '../components/RecipesList/RecipesList';
import DeleteBtn from '../components/DeleteBtn/DeleteBtn';
import { HomeTitle } from './HomePages.styled';

const Home = () => {
  const fetch = useBeerStore(getFetchRecipes);
  const recipesLength = useBeerStore(getRecipesLength);
  const page = useBeerStore(getPage);
  const isSelectedCard = useBeerStore(getSelectedCardLength);

  useEffect(() => {
    fetch(page);
  }, []);

  return (
    <>
      <HomeTitle>Beer recipes</HomeTitle>
      {recipesLength && <RecipesList />}
      {isSelectedCard && <DeleteBtn />}
    </>
  );
};

export default Home;
