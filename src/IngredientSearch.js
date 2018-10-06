import React from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import { Box, Text } from 'rebass';

const IngredientSearch = ({ selectIngredient, ingredients }) => (
  <Downshift onSelect={selectIngredient}>
    {({
      getInputProps,
      getMenuProps,
      getItemProps,
      isOpen,
      inputValue,
      highlightedIndex,
    }) => (
      <div style={{ position: 'relative' }}>
        <Text is="label" htmlFor="ingredient-search">
          Add ingredients
        </Text>
        <input {...getInputProps({ id: 'ingredient-search' })} />
        {isOpen && (
          <Box
            as="ul"
            bg="white"
            css={{ position: 'absolute', top: 16 }}
            {...getMenuProps()}
          >
            {matchSorter(ingredients, inputValue).map((ingredient, i) => (
              <Text
                {...getItemProps({ item: ingredient })}
                as="li"
                key={`searchIng- ${ingredient}`}
                p={1}
                bg={highlightedIndex === i ? '#ccc' : 'transparent'}
              >
                {ingredient}
              </Text>
            ))}
          </Box>
        )}
      </div>
    )}
  </Downshift>
);

export default IngredientSearch;
