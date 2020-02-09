import React, { Fragment } from "react";
import styled from "styled-components";

import DrinkLink from "./DrinkLink";
import drinks from "./data/drinks";
import { MartiniGlass } from "./icons";
import { border } from "./css";

const DrinksList = ({ myIngredients }) => {
  const [allowedMissing, setAllowedMissing] = React.useState(0);
  return (
    <Fragment>
      <h1>
        <MartiniGlass /> My Drinks
      </h1>
      <form>
        <p>
          Allow{" "}
          <Input
            type="number"
            value={allowedMissing}
            onChange={e => setAllowedMissing(e.target.value)}
          />{" "}
          missing ingredients
        </p>
      </form>
      <List>
        {drinks
          .reduce((acc, drink) => {
            const missing = drink.ingredients.filter(
              ing => !myIngredients.includes(ing)
            );
            if (missing.length > allowedMissing) return acc;
            return [...acc, { ...drink, missing }];
          }, [])
          .map(drink => (
            <DrinkLink key={drink.id} {...drink} />
          ))}
      </List>
    </Fragment>
  );
};

const Input = styled.input`
  width: 4ch;
  display: inline;
  border: ${border};
  background-color: white;
`;

const List = styled.ul`
  display: grid;
  grid-row-gap: 1rem;
  margin-top: 2rem;
`;

export default DrinksList;
