import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { Bottle, MartiniGlass } from './icons';
import { VisuallyHidden } from './css';

const Container = styled.nav`
  position: fixed;
  height: 2.75rem;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const NavList = styled.ul`
  display: flex;
  height: 100%;
`;

const NavItem = styled.li`
  display: block;
  height: 100%;
  flex: 1 0 auto;
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  color: white;
  background-color: hsl(var(--hue), 10%, 50%);
  transition: background-color 0.1s;

  &:hover {
    background-color: hsl(var(--hue), 15%, 40%);
  }

  &[aria-current='page'] {
    background-color: hsl(var(--hue), 20%, 30%);
    &:hover {
      background-color: hsl(var(--hue), 20%, 30%);
    }
  }
`;

const Nav = () => (
  <Container>
    <NavList>
      <NavItem>
        <NavLink to="/">
          <Bottle size="2em" />
          <VisuallyHidden mq="30em">Ingredients</VisuallyHidden>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/drinks">
          <MartiniGlass size="2em" />
          <VisuallyHidden mq="30em">Drinks</VisuallyHidden>
        </NavLink>
      </NavItem>
    </NavList>
  </Container>
);

export default Nav;
