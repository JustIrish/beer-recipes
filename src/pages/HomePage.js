// import { toast } from 'react-hot-toast';
import useBeerStore from '../zustand/store';
import { getRecipesLength, getSelectedCardLength } from '../zustand/selectors';

import RecipesList from '../components/RecipesList/RecipesList';
import DeleteBtn from '../components/DeleteBtn/DeleteBtn';
import { HomeTitle } from './HomePages.styled';

const Home = () => {
  const recipesLength = useBeerStore(getRecipesLength);
  const isSelectedCard = useBeerStore(getSelectedCardLength);

  return (
    <>
      <HomeTitle>Beer recipes</HomeTitle>
      {recipesLength > 0 && <RecipesList />}
      {!!isSelectedCard && <DeleteBtn />}
    </>
  );
};

export default Home;
