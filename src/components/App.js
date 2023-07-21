import { useEffect } from 'react';
import useBeerStore from '../zustand/store';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout.styled';
import RecipesList from './RecipesList/RecipesList';
import DeleteBtn from './DeleteBtn/DeleteBtn';

function App() {
  const fetch = useBeerStore(state => state.fetchRecipes);
  const selectedCard = useBeerStore(state => state.selectedCard);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Layout>
          <RecipesList />
          {selectedCard.length > 0 && <DeleteBtn />}
        </Layout>
      </main>
      <GlobalStyle />
    </>
  );
}

export default App;
