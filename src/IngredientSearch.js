import React from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import styled, { css } from 'styled-components';
import ingredients from './data/ingredients';
import { BorderBox, IconButton, hideVisually } from './css';
import { Search as SearchIcon } from './icons';

const IngredientSearch = ({ selectIngredient }) => (
  <Downshift onSelect={selectIngredient}>
    {({
      getInputProps,
      getMenuProps,
      getItemProps,
      getToggleButtonProps,
      isOpen,
      inputValue,
      highlightedIndex,
    }) => (
      <div style={{ position: 'relative', marginTop: '1rem' }}>
        <BorderBox>
          <Label htmlFor="ingredient-search">Add ingredient</Label>
          <SearchWrapper>
            <SearchIcon />
            <SearchInput
              {...getInputProps({
                id: 'ingredient-search',
                placeholder: 'Add ingredient',
              })}
            />
          </SearchWrapper>
          <IconButton {...getToggleButtonProps()}>&#43;</IconButton>
          {isOpen && (
            <SearchResults {...getMenuProps()}>
              {matchSorter(ingredients, inputValue).map((ingredient, i) => (
                <Result
                  {...getItemProps({ item: ingredient })}
                  key={`searchIng-${ingredient}`}
                  highlighted={highlightedIndex === i}
                >
                  {ingredient}
                </Result>
              ))}
            </SearchResults>
          )}
        </BorderBox>
      </div>
    )}
  </Downshift>
);

const Label = styled.label`
  ${hideVisually};
`;

const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  flex: 1;
  &:focus-within {
    color: #fff;
  }
  & > svg {
    grid-column: 1 / 2;
    grid-row: 1;
    margin-left: 1rem;
    z-index: 10;
    align-self: center;
    transition: color 0.2s;
  }
`;

const SearchInput = styled.input`
  grid-column: 1 / -1;
  grid-row: 1;
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.75rem;
  background-color: #fff;
  transition: background-color 0.2s, color 0.2s;
  &:focus {
    background-color: hsl(var(--hue), 50%, 30%);
    color: #fff;
  }
  &::placeholder {
    font-weight: 600;
    color: inherit;
    opacity: 1;
  }
`;

const SearchResults = styled.ul`
  max-height: 60vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  background-color: white;
  color: hsl(var(--hue), 10%, 20%);
  border: 0.25rem solid hsl(var(--hue), 50%, 10%);
  cursor: pointer;
`;

const highlight = css`
  border-color: hsl(var(--hue), 50%, 10%);
  background-color: hsl(var(--hue), 50%, 30%);
  color: #fff;
`;

const Result = styled.li`
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  border-color: transparent;
  &:not(:first-child) {
    border-top-width: 0.25rem;
    border-top-style: solid;
  }
  &:not(:last-child) {
    border-bottom-width: 0.25rem;
    border-bottom-style: solid;
  }
  ${props => props.highlighted && highlight};
  &:hover {
    ${highlight};
  }
`;

export default IngredientSearch;
