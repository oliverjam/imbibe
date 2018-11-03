import React, { Fragment, Suspense, lazy, useState, useContext } from 'react';
import { Router } from '@reach/router';

import { HueContext } from './HueProvider';
import GlobalStyle from './GlobalStyle';
import Nav from './Nav';
import IngredientList from './IngredientList';
import { PageContainer } from './css';

const DrinksList = lazy(() => import('./DrinksList'));
const Drink = lazy(() => import('./Drink'));

function App() {
  const { hue } = useContext(HueContext);
  const [myIngredients, setIngredients] = useState([
    'light rum',
    'ginger beer',
    'lemon peel',
    'añejo rum',
    'orange juice',
    'lemon juice',
    'ginger ale',
    'applejack',
    'grapefruit juice',
    'gin',
    'orange bitters',
    'orange',
    'cherry',
    'dark rum',
    'peach nectar',
  ]);
  const selectIngredient = (newIng, { reset }) => {
    setIngredients([...myIngredients, newIng]);
    reset({ inputValue: '' });
  };
  const removeIngredient = ing => () =>
    setIngredients(myIngredients.filter(x => x !== ing));

  return (
    <Fragment>
      <GlobalStyle themeHue={hue} />
      <Nav />
      <PageContainer>
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
      </PageContainer>
    </Fragment>
  );
}

export default App;
