import React, { Fragment } from 'react';
import styled from 'styled-components';

import DrinkLink from './DrinkLink';
import drinks from './data/drinks';
import { MartiniGlass } from './icons';

const DrinksList = ({ myIngredients }) => (
  <Fragment>
    <h1>
      <MartiniGlass /> My Drinks
    </h1>
    <List>
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
    </List>
  </Fragment>
);

const List = styled.ul`
  display: grid;
  grid-row-gap: 1rem;
  margin-top: 2rem;
`;

export default DrinksList;
