import { Link, useLocation } from 'react-router-dom';

import useBeerStore from '../../zustand/store';

import { RecipeItem, CardWrap, Image, RecipeTitle } from './RecipesList.styled';

const RecipeCard = ({ id, image_url, name }) => {
  const selectedCard = useBeerStore(state => state.selectedCard);
  const addSelectedCard = useBeerStore(state => state.addSelectedCard);
  const removeFromSelectedCard = useBeerStore(
    state => state.removeFromSelectedCard
  );
  const getRecipeById = useBeerStore(state => state.getRecipeById);
  const location = useLocation();

  const onHandleRightClick = event => {
    event.preventDefault();
    selectedCard.includes(id)
      ? removeFromSelectedCard(id)
      : addSelectedCard(id);
  };

  const onHandleClick = () => {
    getRecipeById(id);
  };

  return (
    <RecipeItem
      style={{
        backgroundColor: selectedCard.includes(id) ? '#a6b7c9' : '#f2f3f7',
      }}
      onContextMenu={onHandleRightClick}
      onClick={onHandleClick}
    >
      {' '}
      <Link to={`/${id}`} state={{ from: location }}>
        <CardWrap>
          <Image src={image_url} alt="beer" width={100} loading="lazy" />
          <RecipeTitle>{name}</RecipeTitle>
        </CardWrap>
      </Link>
    </RecipeItem>
  );
};

export default RecipeCard;
