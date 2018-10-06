import React from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import styled, { css } from 'styled-components';
import { Text } from 'rebass';

const hideVisually = css`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  whitespace: nowrap;
  width: 1px;
`;

const Container = styled.div`
  position: relative;
  padding: 1rem;
  background-color: hsl(200, 20%, 25%);
  color: white;
`;

const shadow = '0 2px 4px hsla(200, 20%, 25%, 0.8)';

const Label = styled.label`
  ${hideVisually};
`;

const SearchInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
  margin-top: 0.25rem;
  padding: 0.5rem 1rem;
  background-color: hsl(200, 15%, 40%);
  &:focus {
    box-shadow: ${shadow};
  }
  &::placeholder {
    font-weight: 600;
    color: white;
  }
`;

const SearchResults = styled.ul`
  position: absolute;
  top: calc(100% - 0.5rem);
  font-size: 14px;
  background-color: white;
  color: hsl(200, 10%, 20%);
  box-shadow: ${shadow};
  cursor: pointer;
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
      <div style={{ position: 'relative' }}>
        <Container>
          <Label htmlFor="ingredient-search">Add ingredients</Label>
          <SearchInput
            {...getInputProps({
              id: 'ingredient-search',
              placeholder: 'Add ingredients',
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
                    highlightedIndex === i
                      ? 'hsl(200, 10%, 90%)'
                      : 'transparent'
                  }
                >
                  {ingredient}
                </Text>
              ))}
            </SearchResults>
          )}
        </Container>
      </div>
    )}
  </Downshift>
);

export default IngredientSearch;
