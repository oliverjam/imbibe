import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Container = styled(Link)`
  display: flex;
  /* min-height: 4rem; */
  margin-top: 1rem;
  border: 2px solid hsl(200, 10%, 10%);
  background-color: hsl(200, 10%, 30%);
  /* background-image: linear-gradient(transparent, #000), url('${p => p.img}');
  background-size: cover; */
  color: white;
  /* box-shadow: 0 1px 3px hsla(200, 20%, 20%, 0.5); */
`;

const Image = styled.img`
  display: block;
  height: auto;
  border-right: 2px solid hsl(200, 10%, 10%);
  object-fit: cover;
  flex: 0 1 4rem;
  &::after {
    content: '';
  }
`;

const Content = styled.div`
  padding: 1rem;
  flex: 1;
`;

const Title = styled.h4`
  text-transform: capitalize;
  z-index: 10;
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
    <Container to={`/drink/${id}`}>
      {/* <Image src={image} aria-hidden="true" /> */}
      <Content>
        <Title>{name}</Title>
        <ul>
          {ingredients.slice(0, 3).map(ing => (
            <Ing strike={missing.includes(ing)}>{capitalise(ing)}</Ing>
          ))}
        </ul>
      </Content>
    </Container>
  );
};

export default Drink;
