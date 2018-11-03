import React, { Fragment } from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import IngredientSearch from './IngredientSearch';
import { PageContainer, Header } from './css';
import { Bottle } from './icons';

const List = styled.ul`
  margin-top: 1rem;
  margin-left: -1rem;
  /* display: grid; */
  display: flex;
  flex-wrap: wrap;
  /* justify-items: start; */
  /* grid-row-gap: 1rem; */
`;

const AnimatedLi = posed.li();

const Ing = styled(AnimatedLi)`
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  border: 0.25rem solid hsl(var(--hue), 50%, 10%);
  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #fff;
`;

const Button = styled.button`
  min-height: 2.75rem;
  min-width: 2.75rem;
  margin-left: auto;
  border: none;
  border-left: 0.25rem solid hsl(var(--hue), 50%, 10%);
  padding: 0;
  background: hsl(var(--hue), 50%, 30%);
  color: #fff;
  font-size: 1.5rem;
  font-weight: 900;
`;

const IngredientList = ({
  myIngredients,
  selectIngredient,
  removeIngredient,
}) => (
  <Fragment>
    <Header>
      <h3>
        <Bottle size="2em" />
        My Ingredients
      </h3>
    </Header>
    <PageContainer>
      <IngredientSearch selectIngredient={selectIngredient} />
      <List>
        <PoseGroup>
          {myIngredients.map(ing => (
            <Ing key={`myIng-${ing}`}>
              <Content>{ing[0].toUpperCase() + ing.slice(1)}</Content>
              <Button
                onClick={removeIngredient(ing)}
                aria-label={`Remove ${ing}`}
              >
                &times;
              </Button>
            </Ing>
          ))}
        </PoseGroup>
      </List>
    </PageContainer>
  </Fragment>
);

export default IngredientList;
