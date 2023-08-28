import { useEffect } from 'react';
// import { toast } from 'react-hot-toast';
import useBeerStore from '../zustand/store';

import RecipesList from '../components/RecipesList/RecipesList';
import DeleteBtn from '../components/DeleteBtn/DeleteBtn';
import { HomeTitle } from './HomePages.styled';

const Home = () => {
  const fetch = useBeerStore(state => state.fetchRecipes);
  const page = useBeerStore(state => state.page);
  const isSelectedCard = useBeerStore(state => state.selectedCard.length);

  useEffect(() => {
    fetch(page);
  }, [fetch, page]);

  return (
    <>
      <HomeTitle>Beer recipes</HomeTitle>
      <RecipesList />
      {isSelectedCard && <DeleteBtn />}
    </>
  );
};

export default Home;
