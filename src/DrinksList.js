import React, { Fragment } from 'react';

import DrinkLink from './DrinkLink';
import { Box, Heading } from 'rebass';

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
          <DrinkLink key={drink.id} {...drink} />
        ))}
    </Box>
  </Fragment>
);

// <Text as="li" key={drink.idDrink} mt={'1rem'}>
//   <Text
//     as="span"
//     fontWeight="bold"
//     css={{ textTransform: 'capitalize' }}
//   >
//     {drink.strDrink}
//   </Text>
//   <Box as="ul" fontSize={2}>
//     {drink.ingredients.map(ing => (
//       <Text
//         as="li"
//         key={`${drink.idDrink}-ing-${ing}`}
//         color={drink.missing.includes(ing) ? 'red' : 'currentColor'}
//       >
//         {ing[0].toUpperCase() + ing.slice(1)}
//       </Text>
//     ))}
//   </Box>
// </Text>

export default DrinksList;
