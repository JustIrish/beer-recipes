import { RecipeItem } from './RecipesList.styled';

const RecipeCard = ({ image_url, name }) => {
  return (
    <RecipeItem>
      <img src={image_url} alt="beer" width={100} loading="lazy" />
      <p>{name}</p>
    </RecipeItem>
  );
};

export default RecipeCard;
