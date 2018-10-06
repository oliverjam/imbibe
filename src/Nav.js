import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { Box, Flex } from 'rebass';

const NavLink = styled(Link)`
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  color: white;
  background-color: hsl(200, 10%, 50%);
  transition: background-color 0.1s;

  &:hover {
    background-color: hsl(200, 15%, 40%);
  }

  &[aria-current='page'] {
    background-color: hsl(200, 20%, 30%);
    &:hover {
      background-color: hsl(200, 20%, 30%);
    }
  }
`;

const Nav = () => (
  <Box as="nav">
    <Flex as="ul">
      <Flex as="li" width={1 / 2}>
        <NavLink to="/">Ingredients</NavLink>
      </Flex>
      <Flex as="li" width={1 / 2}>
        <NavLink to="/drinks">Drinks</NavLink>
      </Flex>
    </Flex>
  </Box>
);

export default Nav;
