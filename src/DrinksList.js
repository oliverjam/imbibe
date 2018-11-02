import React, { Fragment } from 'react';

import DrinkLink from './DrinkLink';
import drinks from './data/drinks';

const DrinksList = ({ myIngredients }) => (
  <Fragment>
    <h3>Drinks</h3>
    <ul>
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
    </ul>
  </Fragment>
);

export default DrinksList;
