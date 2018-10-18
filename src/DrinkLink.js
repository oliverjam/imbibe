import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { Flex } from 'rebass';

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

const upperCase = str => str[0].toUpperCase() + str.slice(1);

const Drink = ({ idDrink, ingredients, strDrink: name, strDrinkThumb }) => {
  return (
    <Container to={`/drink/${idDrink}`}>
      <Image src={strDrinkThumb} aria-hidden="true" />
      <Content>
        <Title>{name}</Title>
        <Flex as="span" fontSize={2}>
          {ingredients
            .slice(0, 3)
            .reduce(
              (str, ing, i, arr) =>
                str +
                upperCase(ing) +
                (ing === arr[arr.length - 1] ? '' : ', '),
              ''
            )}
        </Flex>
      </Content>
    </Container>
  );
};

export default Drink;
