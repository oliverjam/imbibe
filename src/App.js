import React, { Component } from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import { Flex, Box, Heading, Text } from 'rebass';
// import { ThemeProvider } from 'emotion-theming';

class App extends Component {
  componentDidMount() {
    import('./drinks').then(drinks =>
      this.setState({ drinks: drinks.default })
    );
    import('./ingredients').then(ingredients =>
      this.setState({ ingredients: ingredients.default })
    );
  }
  state = {
    drinks: [],
    ingredients: [],
  };
  render() {
    const { drinks, ingredients } = this.state;
    if (!drinks.length || !ingredients.length) return <div>Loading...</div>;
    return (
      <Flex>
        <Box width={1 / 2}>
          <Heading as="h3">Ingredients</Heading>
          <Downshift>
            {({
              getInputProps,
              getItemProps,
              isOpen,
              inputValue,
              highlightedIndex,
            }) => (
              <div>
                <Text is="label" htmlFor="ingredient-search">
                  Add ingredients
                </Text>
                <input {...getInputProps({ id: 'ingredient-search' })} />
                {isOpen && (
                  <Box as="ul">
                    {matchSorter(ingredients, inputValue).map(
                      (ingredient, i) => (
                        <Text
                          {...getItemProps({ item: ingredient })}
                          as="li"
                          key={ingredient}
                          p={1}
                          bg={highlightedIndex === i ? '#ccc' : 'transparent'}
                        >
                          {ingredient}
                        </Text>
                      )
                    )}
                  </Box>
                )}
              </div>
            )}
          </Downshift>
        </Box>
        <Box width={1 / 2}>
          <Heading as="h3">Drinks</Heading>
          <Box as="ul">
            {drinks.slice(0, 20).map(drink => (
              <Text as="li" key={drink.idDrink}>
                {drink.strDrink}
              </Text>
            ))}
          </Box>
        </Box>
      </Flex>
    );
  }
}

export default App;
