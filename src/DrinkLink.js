import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { BorderBox, border } from './css';

const Content = styled.div`
  /* padding: 1rem; */
  flex: 1;
  background-color: #fff;
`;

const Title = styled.h4`
  border-bottom: ${border};
  padding: 0.5rem 1rem;
  background-color: hsl(var(--hue), 50%, 30%);
  color: #fff;
  text-transform: capitalize;
  z-index: 10;
`;

const List = styled.ul`
  padding: 0.5rem 1rem;
`;

const Ing = styled.li`
  display: inline;
  font-size: 0.875rem;
  text-decoration: ${p => (p.strike ? 'line-through' : 'none')};
  &:not(:first-child) {
    margin-left: 0.5ch;
  }
  &:not(:last-child)::after {
    content: ',';
  }
`;

const capitalise = str => str[0].toUpperCase() + str.slice(1);

const Drink = ({ id, ingredients, name, image, missing }) => {
  return (
    <BorderBox as={Link} to={`/drink/${id}`}>
      <Content>
        <Title>{name}</Title>
        <List>
          {ingredients.slice(0, 3).map(ing => (
            <Ing key={`drinkIng-${ing}`} strike={missing.includes(ing)}>
              {capitalise(ing)}
            </Ing>
          ))}
        </List>
      </Content>
    </BorderBox>
  );
};

export default Drink;
