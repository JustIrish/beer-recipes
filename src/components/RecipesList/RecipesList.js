import useBeerStore from '../../zustand/store';

import RecipeCard from './RecipeCard';
import { List } from './RecipesList.styled';

const RecipesList = () => {
  const recipes = useBeerStore(state => state.recipes);

  return (
    <List>
      {recipes.map(
        ({ id, ...props }, idx) =>
          idx < 15 && <RecipeCard key={id} id={id} {...props} />
      )}
    </List>
  );
};

export default RecipesList;
