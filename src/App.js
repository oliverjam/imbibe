import React, { Component, Fragment } from 'react';
import { Router } from '@reach/router';

import { HueContext } from './HueProvider';
import GlobalStyle from './GlobalStyle';
import Nav from './Nav';
import IngredientList from './IngredientList';
import DrinksList from './DrinksList';
import Drink from './Drink';
import { PageContainer } from './css';

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
    return (
      <Fragment>
        <HueContext.Consumer>
          {({ hue }) => <GlobalStyle themeHue={hue} />}
        </HueContext.Consumer>
        <Nav />
        <PageContainer>
          {!drinks.length || !ingredients.length ? (
            'Loading...'
          ) : (
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
              <Drink path="/drink/:drinkId" drinks={drinks} />
            </Router>
          )}
        </PageContainer>
      </Fragment>
    );
  }
}

export default App;
