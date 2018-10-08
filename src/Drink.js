import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { Flex, Text, Heading } from 'rebass';

const Container = styled.div`
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
  /* display: flex;
  align-items: center; */
  padding: 1rem;
  flex: 1;
`;

const Title = styled.h4`
  text-transform: capitalize;
  z-index: 10;
`;

const upperCase = str => str[0].toUpperCase() + str.slice(1);

const Drink = ({
  idDrink,
  ingredients,
  measures,
  strDrink: name,
  strGlass,
  strInstructions,
  strDrinkThumb,
}) => {
  const steps = measures.map(
    (measure, i) => measure + upperCase(ingredients[i])
  );
  return (
    <Container img={strDrinkThumb}>
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
      {/* <Box as="ul">
        {steps.map(step => (
          <Text as="li" key={step}>
            {step}
          </Text>
        ))}
      </Box> */}
    </Container>
  );
};

export default Drink;
