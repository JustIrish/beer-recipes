import { Link, useLocation } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

import useBeerStore from '../zustand/store';
import { getSelectedRecipe } from '../zustand/selectors';

import { Wrap, DescWrap } from './RecipesDetails.styles';

const MovieDetails = () => {
  const selectedRecipe = useBeerStore(getSelectedRecipe);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <Link to={backLinkHref}>
        <HiArrowLeft size="25" color=" #15253c" />
      </Link>
      <Wrap>
        <img
          src={selectedRecipe.image_url}
          alt="beer"
          width={100}
          loading="lazy"
        />
        <DescWrap>
          <p>{selectedRecipe.name}</p>
          <p>{selectedRecipe.tagline}</p>
          <p>First brewed: {selectedRecipe.first_brewed}</p>
          <p>Description: {selectedRecipe.description}</p>
          {/* <p>Ingredients{selectedRecipe.ingredients.mult}</p> */}
        </DescWrap>
      </Wrap>
    </>
  );
};

export default MovieDetails;
