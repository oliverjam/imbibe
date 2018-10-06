import React, { Fragment } from 'react';
import IngredientsSearch from './IngredientSearch';
import { Flex, Box, Heading, Text, Button } from 'rebass';

const IngredientList = ({
  ingredients,
  myIngredients,
  selectIngredient,
  removeIngredient,
}) => (
  <Fragment>
    <Heading as="h3">Ingredients</Heading>
    <IngredientsSearch
      ingredients={ingredients}
      selectIngredient={selectIngredient}
    />
    <Box as="ul">
      {myIngredients.map(ing => (
        <Flex as="li" key={`myIng-${ing}`} alignItems="center">
          <Text as="span">{ing}</Text>
          <Button
            onClick={removeIngredient(ing)}
            ml={1}
            bg="transparent"
            color="hsl(200, 10%, 70%)"
            px={1}
            py={1}
          >
            &times;
          </Button>
        </Flex>
      ))}
    </Box>
  </Fragment>
);

export default IngredientList;
