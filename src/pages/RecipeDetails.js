import { Link, useLocation, useParams } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

import useBeerStore from '../zustand/store';

import { Wrap, DescWrap } from './RecipesDetails.styles';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const { recipes } = useBeerStore();

  const recipe = recipes.find(({ id }) => id === Number(recipeId));

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <Link to={backLinkHref}>
        <HiArrowLeft size="25" color=" #15253c" />
      </Link>
      {recipe ? (
        <Wrap>
          <img src={recipe.image_url} alt="beer" width={100} loading="lazy" />
          <DescWrap>
            <p>{recipe.name}</p>
            <p>{recipe.tagline}</p>
            <p>First brewed: {recipe.first_brewed}</p>
            <p>Description: {recipe.description}</p>
            {/* <p>Ingredients{ingredients.mult}</p> */}
          </DescWrap>
        </Wrap>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '20px',
          }}
        >
          Recipe not found.
        </div>
      )}
    </>
  );
};

export default RecipeDetails;
