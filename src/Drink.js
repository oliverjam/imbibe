import React, { useContext, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { HueContext } from './HueProvider';
import drinks from './data/drinks';

const upperCase = str => str[0].toUpperCase() + str.slice(1);

const Drink = ({ drinkId }) => {
  const hue = useMemo(() => (360 / 6) * (drinkId % 6), [drinkId]);
  const { setHue } = useContext(HueContext);
  useEffect(
    () => {
      setHue(hue);
    },
    [drinkId]
  );

  const { ingredients, measures, name, glass, method, image } = useMemo(
    () => drinks.find(drink => drink.id === drinkId),
    [drinkId]
  );

  return (
    <Container>
      <Title>{name}</Title>
      <Ingredients>
        {measures.map((measure, i) => (
          <Step key={measure + ingredients[i]}>
            <span>{measure}</span>
            <span>{upperCase(ingredients[i])}</span>
          </Step>
        ))}
      </Ingredients>
      <Instructions>{method}</Instructions>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <Glass>{glass}</Glass>
    </Container>
  );
};

const border = `0.25rem solid hsl(var(--hue), 50%, 10%)`;

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(3, 1fr);
  border: ${border};
  color: hsl(20, 10%, 10%);
  @media (min-width: 40em) {
    grid-template-columns: 30ch 1fr;
    grid-template-rows: repeat(5, auto);
  }
  & > * {
    padding: 1rem;
    grid-column: 1 / 4;
  }
`;

const Title = styled.h1`
  padding: 0.5rem;
  background-color: white;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 900;
  font-size: 1.25rem;
  /* z-index: 10; */
  @media (min-width: 40em) {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;

const Ingredients = styled.ul`
  grid-column: 1 / -1;
  @media (min-width: 40em) {
    grid-row: 2 / 4;
    grid-column: 1 / 1;
  }

  border-top: ${border};
  font-style: italic;
`;

const Step = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Instructions = styled.p`
  grid-row: 3;
  grid-column: 2 / 4;
  border-top: ${border};
  @media (min-width: 40em) {
    grid-row: 4 / 6;
    grid-column: 1 / 1;
  }
`;

const ImageContainer = styled.div`
  display: none;
  @media (min-width: 40em) {
    display: block;
    grid-row: 3 / 6;
    grid-column: 2 / 2;
    border-top: ${border};
    border-left: ${border};
    background-color: white;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Glass = styled.div`
  grid-row: 3;
  grid-column: 1;
  border-top: ${border};
  border-right: ${border};
  @media (min-width: 40em) {
    grid-row: 1 / 3;
    grid-column: 2 / 2;
    border-top: none;
    border-right: none;
    border-left: ${border};
  }
`;

export default Drink;
