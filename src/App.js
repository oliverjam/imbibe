import React, { Component, Fragment } from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import { createGlobalStyle } from 'styled-components';
import { Flex, Box, Heading, Text, Button } from 'rebass';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: hsl(200, 10%, 20%);
  }
  ul {
    padding: 0;
    list-style: none;
  }
`;
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
    myIngredients: [],
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
    if (!drinks.length || !ingredients.length) return <div>Loading...</div>;
    return (
      <Fragment>
        <GlobalStyle />
      <Flex>
        <Box width={1 / 2}>
          <Heading as="h3">Ingredients</Heading>
          <Downshift
            onSelect={this.selectIngredient}
            // stateReducer={(state, changes) =>
            //   console.log({ state, changes }) || changes
            // }
          >
            {({
              getInputProps,
              getMenuProps,
              getItemProps,
              isOpen,
              inputValue,
              highlightedIndex,
            }) => (
              <div style={{ position: 'relative' }}>
                <Text is="label" htmlFor="ingredient-search">
                  Add ingredients
                </Text>
                <input {...getInputProps({ id: 'ingredient-search' })} />
                {isOpen && (
                  <Box
                    as="ul"
                    bg="white"
                    css={{ position: 'absolute', top: 16 }}
                    {...getMenuProps()}
                  >
                    {matchSorter(ingredients, inputValue).map(
                      (ingredient, i) => (
                        <Text
                          {...getItemProps({ item: ingredient })}
                          as="li"
                          key={`searchIng- ${ingredient}`}
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
            <Box as="ul">
          {myIngredients.map(ing => (
                <Flex as="li" key={`myIng-${ing}`} alignItems="center">
                  <Text as="span">{ing}</Text>
                  <Button
                    onClick={this.removeIngredient(ing)}
                    ml={1}
                    bg="transparent"
                    color="hsl(200, 10%, 70%)"
                    px={1}
                    py={1}
                  >
                    &times;
                  </Button>
                </Flex>
          ))}
        </Box>
          </Box>
        <Box width={1 / 2}>
          <Heading as="h3">Drinks</Heading>
          <Box as="ul">
            {drinks
                .reduce((acc, drink) => {
                  const missing = drink.ingredients.filter(
                    ing => !myIngredients.includes(ing)
                  );
                  if (missing.length >= 2) return acc;
                  return [...acc, { ...drink, missing }];
                }, [])
              .map(drink => (
                  <Text as="li" key={drink.idDrink} mt={'1rem'}>
                    <Text as="span">{drink.strDrink}</Text>
                    <Box as="ul" ml={2} fontSize={2}>
                      {drink.ingredients.map(ing => (
                        <Text
                          as="li"
                          key={`${drink.idDrink}-ing-${ing}`}
                          color={
                            drink.missing.includes(ing) ? 'red' : 'currentColor'
                          }
                        >
                          {ing}
                        </Text>
                      ))}
                    </Box>
                </Text>
              ))}
          </Box>
        </Box>
      </Flex>
      </Fragment>
    );
  }
}

export default App;
