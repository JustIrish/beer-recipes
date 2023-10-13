import { Link, useLocation } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

import useBeerStore from '../../zustand/store';

import { RecipeItem, CardWrap, Image, RecipeTitle } from './RecipesList.styled';

const RecipeCard = ({ id, image_url, name }) => {
  const { selectedCard, toggleBeerCards } = useBeerStore(
    ({ selectedCard, toggleBeerCards }) => ({
      selectedCard,
      toggleBeerCards,
    }),
    shallow
  );

  const location = useLocation();

  const onHandleRightClick = event => {
    event.preventDefault();

    toggleBeerCards(id);
  };

  return (
    <RecipeItem
      style={{
        backgroundColor: selectedCard.includes(id) ? '#a6b7c9' : '#f2f3f7',
      }}
      onContextMenu={onHandleRightClick}
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
