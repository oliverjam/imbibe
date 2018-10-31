import React, { Component, Fragment, Suspense, lazy } from 'react';
import { Router } from '@reach/router';
import { Box } from 'rebass';

import GlobalStyle from './GlobalStyle';
import Nav from './Nav';
import IngredientSearch from './IngredientSearch';
import IngredientList from './IngredientList';

const DrinksList = lazy(() => import('./DrinksList'));
const Drink = lazy(() => import('./Drink'));

class App extends Component {
  state = {
    myIngredients: [
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
    ],
  };
  selectIngredient = (newIng, { reset }) => {
    this.setState(prev => ({ myIngredients: [...prev.myIngredients, newIng] }));
    reset({ inputValue: '' });
  };
  removeIngredient = ing => () =>
    this.setState(({ myIngredients }) => ({
      myIngredients: myIngredients.filter(x => x !== ing),
    }));
  render() {
    const { myIngredients } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <Nav />
        <IngredientSearch selectIngredient={this.selectIngredient} />
        <Box p={3} mx="auto" css={{ maxWidth: '30rem' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Router>
              <IngredientList
                path="/"
                myIngredients={myIngredients}
                selectIngredient={this.selectIngredient}
                removeIngredient={this.removeIngredient}
              />
              <DrinksList path="/drinks" myIngredients={myIngredients} />
              <Drink path="/drink/:drinkId" />
            </Router>
          </Suspense>
        </Box>
      </Fragment>
    );
  }
}

export default App;
