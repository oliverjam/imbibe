import React, { Fragment } from 'react';

import DrinkLink from './DrinkLink';
import drinks from './data/drinks';
import { MartiniGlass } from './icons';

const DrinksList = ({ myIngredients }) => (
  <Fragment>
    <h1>
      <MartiniGlass size="2em" />
      My Drinks
    </h1>
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
