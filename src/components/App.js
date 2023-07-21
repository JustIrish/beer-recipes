import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/HomePage'));
const RecipeDetails = lazy(() => import('../pages/RecipeDetails'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/:recipeId" element={<RecipeDetails />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    // <>

    //   <main>
    //     <RecipesList />
    //     {selectedCard.length > 0 && <DeleteBtn />}
    //   </main>
    //   <GlobalStyle />
    // </>
  );
}

export default App;
