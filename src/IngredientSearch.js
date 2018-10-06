import React from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import styled from 'styled-components';
import { Text } from 'rebass';

const shadow = '0 1px 3px hsla(200, 20%, 20%, 0.5)';

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

const SearchInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
  margin-top: 0.25rem;
  padding: 0.5rem 1rem;
  background-color: hsl(200, 10%, 90%);
  &:focus {
    box-shadow: ${shadow};
  }
`;

const SearchResults = styled.ul`
  position: relative;
  top: 1rem;
  background-color: white;
  box-shadow: ${shadow};
`;

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
      <div style={{ position: 'relative', marginTop: 8 }}>
        <Label htmlFor="ingredient-search">Add ingredients</Label>
        <SearchInput
          {...getInputProps({
            id: 'ingredient-search',
            placeholder: 'Bourbon...',
          })}
        />
        {isOpen && (
          <SearchResults {...getMenuProps()}>
            {matchSorter(ingredients, inputValue).map((ingredient, i) => (
              <Text
                {...getItemProps({ item: ingredient })}
                as="li"
                key={`searchIng- ${ingredient}`}
                px={3}
                py={2}
                bg={
                  highlightedIndex === i ? 'hsl(200, 10%, 90%)' : 'transparent'
                }
              >
                {ingredient}
              </Text>
            ))}
          </SearchResults>
        )}
      </div>
    )}
  </Downshift>
);

export default IngredientSearch;
