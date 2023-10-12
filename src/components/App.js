import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import useBeerStore from '../zustand/store';

import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/HomePage'));
const RecipeDetails = lazy(() => import('../pages/RecipeDetails'));

useBeerStore.getState().fetchRecipes(1);

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/:recipeId" element={<RecipeDetails />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
