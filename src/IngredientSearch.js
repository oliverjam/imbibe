import React from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import styled, { css } from 'styled-components';
import ingredients from './data/ingredients';

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
  background-color: hsl(var(--hue), 20%, 25%);
  color: white;
`;

const shadow = '0 2px 4px hsla(var(--hue), 20%, 25%, 0.8)';

const Label = styled.label`
  ${hideVisually};
`;

const SearchInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
  margin-top: 0.25rem;
  border: 0.25rem solid hsl(var(--hue), 50%, 10%);
  padding: 0.5rem 1rem;
  background-color: hsl(var(--hue), 15%, 40%);
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
  /* font-size: 14px; */
  background-color: white;
  color: hsl(var(--hue), 10%, 20%);
  box-shadow: ${shadow};
  border: 0.25rem solid hsl(var(--hue), 50%, 10%);
  cursor: pointer;
`;

const Result = styled.li`
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  ${props =>
    props.highlighted && 'background-color: hsl(var(--hue), 10%, 90%)'};
  &:hover {
    background-color: hsl(var(--hue), 10%, 90%);
  }
`;

const IngredientSearch = ({ selectIngredient }) => (
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
                <Result
                  {...getItemProps({ item: ingredient })}
                  key={`searchIng- ${ingredient}`}
                  highlighted={highlightedIndex === i}
                >
                  {ingredient}
                </Result>
              ))}
            </SearchResults>
          )}
        </Container>
      </div>
    )}
  </Downshift>
);

export default IngredientSearch;
