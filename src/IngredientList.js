import React, { Fragment } from 'react';
import styled from 'styled-components';

const Ing = styled.li`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  min-height: 2.75rem;
  margin-left: 0.5rem;
  border: none;
  padding: 0;
  background: none;
  font-size: 1.5rem;
`;

const IngredientList = ({
  myIngredients,
  selectIngredient,
  removeIngredient,
}) => (
  <Fragment>
    <h3>My Ingredients</h3>
    <ul>
      {myIngredients.map(ing => (
        <Ing>
          <span>{ing[0].toUpperCase() + ing.slice(1)}</span>
          <Button onClick={removeIngredient(ing)}>&times;</Button>
        </Ing>
      ))}
    </ul>
  </Fragment>
);

export default IngredientList;
