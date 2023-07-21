import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import useBeerStore from '../zustand/store';

import RecipesList from '../components/RecipesList/RecipesList';
import DeleteBtn from '../components/DeleteBtn/DeleteBtn';
import { HomeTitle } from './Pages.styled';

const Home = () => {
  const fetch = useBeerStore(state => state.fetchRecipes);
  const selectedCard = useBeerStore(state => state.selectedCard);

  useEffect(() => {
    fetch().catch(error => {
      console.log(`${error.name}: ${error.message}`);
      toast.error('Sorry, something went wrong...');
    });
  }, [fetch]);

  return (
    <>
      <HomeTitle>Beer recipes</HomeTitle>
      <RecipesList />
      {selectedCard.length > 0 && <DeleteBtn />}
    </>
  );
};

export default Home;
