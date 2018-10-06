import React, { Component, Fragment } from 'react';
import { Router } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import { Box } from 'rebass';

import Nav from './Nav';
import IngredientList from './IngredientList';
import DrinksList from './DrinksList';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: hsl(200, 10%, 20%);
    background-color: hsl(20, 10%, 97%);
  }
  ul {
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

class App extends Component {
  componentDidMount() {
    import('./data/drinks').then(drinks =>
      this.setState({ drinks: drinks.default })
    );
    import('./data/ingredients').then(ingredients =>
      this.setState({ ingredients: ingredients.default })
    );
  }
  state = {
    drinks: [],
    ingredients: [],
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
    const { drinks, ingredients, myIngredients } = this.state;
    if (!drinks.length || !ingredients.length) return null;
    return (
      <Fragment>
        <GlobalStyle />
        <Box p={3} mx="auto" css={{ maxWidth: '30rem' }}>
          <Nav />
          <Box mt={3}>
            <Router>
              <IngredientList
                path="/"
                ingredients={ingredients}
                myIngredients={myIngredients}
                selectIngredient={this.selectIngredient}
                removeIngredient={this.removeIngredient}
              />
              <DrinksList
                path="/drinks"
                drinks={drinks}
                myIngredients={myIngredients}
              />
            </Router>
          </Box>
        </Box>
      </Fragment>
    );
  }
}

export default App;
