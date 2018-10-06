import React, { Fragment } from 'react';
import { Box, Heading, Text } from 'rebass';

const DrinksList = ({ drinks, myIngredients }) => (
  <Fragment>
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
                  color={drink.missing.includes(ing) ? 'red' : 'currentColor'}
                >
                  {ing}
                </Text>
              ))}
            </Box>
          </Text>
        ))}
    </Box>
  </Fragment>
);

export default DrinksList;
