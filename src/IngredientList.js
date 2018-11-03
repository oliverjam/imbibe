import React, { Fragment } from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import IngredientSearch from './IngredientSearch';
import { BorderBox, IconButton } from './css';
import { Bottle } from './icons';

const List = styled.ul`
  margin-top: 1rem;
  margin-left: -1rem;
  display: flex;
  flex-wrap: wrap;
`;

const PosedLi = posed.li();

const ListItem = styled(PosedLi)`
  padding-top: 1rem;
  padding-left: 1rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #fff;
`;

const IngredientList = ({
  myIngredients,
  selectIngredient,
  removeIngredient,
}) => (
  <Fragment>
    <h1>
      <Bottle size="2em" />
      My Ingredients
    </h1>
    <IngredientSearch selectIngredient={selectIngredient} />
    <List>
      <PoseGroup>
        {myIngredients.map(ing => (
          <ListItem key={`myIng-${ing}`}>
            <BorderBox>
              <Content>{ing[0].toUpperCase() + ing.slice(1)}</Content>
              <IconButton
                onClick={removeIngredient(ing)}
                aria-label={`Remove ${ing}`}
              >
                &times;
              </IconButton>
            </BorderBox>
          </ListItem>
        ))}
      </PoseGroup>
    </List>
  </Fragment>
);

export default IngredientList;
