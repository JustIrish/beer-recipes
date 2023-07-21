import useBeerStore from '../../zustand/store';

import { RecipeItem } from './RecipesList.styled';

const RecipeCard = ({ id, image_url, name }) => {
  const selectedCard = useBeerStore(state => state.selectedCard);
  const addSelectedCard = useBeerStore(state => state.addSelectedCard);
  const removeFromSelectedCard = useBeerStore(
    state => state.removeFromSelectedCard
  );

  const onHandleRightClick = event => {
    event.preventDefault();
    selectedCard.includes(id)
      ? removeFromSelectedCard(id)
      : addSelectedCard(id);
  };

  const onHandleClick = () => {
    // ;
  };

  return (
    <RecipeItem
      style={{
        backgroundColor: selectedCard.includes(id) ? '#ADC9A6' : '#f3f7f2',
      }}
      onContextMenu={onHandleRightClick}
      onClick={onHandleClick}
    >
      <img src={image_url} alt="beer" width={100} loading="lazy" />
      <p>{name}</p>
    </RecipeItem>
  );
};

export default RecipeCard;
