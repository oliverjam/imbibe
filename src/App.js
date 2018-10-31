import React, { Fragment, Suspense, lazy, useState } from 'react';
import { Router } from '@reach/router';
import { Box } from 'rebass';

import GlobalStyle from './GlobalStyle';
import Nav from './Nav';
import IngredientSearch from './IngredientSearch';
import IngredientList from './IngredientList';

const DrinksList = lazy(() => import('./DrinksList'));
const Drink = lazy(() => import('./Drink'));

function App() {
  const [myIngredients, setIngredients] = useState([]);
  const selectIngredient = (newIng, { reset }) => {
    setIngredients([...myIngredients, newIng]);
    reset({ inputValue: '' });
  };
  const removeIngredient = ing => () =>
    setIngredients(myIngredients.filter(x => x !== ing));

  return (
    <Fragment>
      <GlobalStyle />
      <Nav />
      <IngredientSearch selectIngredient={selectIngredient} />
      <Box p={3} mx="auto" css={{ maxWidth: '30rem' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <IngredientList
              path="/"
              myIngredients={myIngredients}
              selectIngredient={selectIngredient}
              removeIngredient={removeIngredient}
            />
            <DrinksList path="/drinks" myIngredients={myIngredients} />
            <Drink path="/drink/:drinkId" />
          </Router>
        </Suspense>
      </Box>
    </Fragment>
  );
}

export default App;
