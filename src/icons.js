import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  vertical-align: middle;
`;

export const MartiniGlass = ({
  size = '1.5em',
  fill = 'none',
  stroke = 'currentColor',
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
    strokeLinecap="round"
    {...props}
  >
    <path d="M 5 6 h 22 L 16 18 Z" />
    <path d="M 16 18 V 28 M 12 28 H 20" />
    <path d="M 24 4 a 3 3 1 1 1 4 4" strokeWidth="1" />
  </Svg>
);

export const Bottle = ({
  size = '1.5em',
  fill = 'none',
  stroke = 'currentColor',
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
    strokeLinecap="round"
    {...props}
  >
    <path d="M 13 3 h 6 M 14 3 v 8 a 4 4 1 0 0 -4 4 v 12 a 2.75 1 1 0 0 12 0 M 18 3 v 8 a 4 4 1 0 1 4 4 v 12" />
    <rect width="12" height="7" x="10" y="16" />
  </Svg>
);

export const Search = ({
  size = '1.5em',
  fill = 'none',
  stroke = 'currentColor',
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
    strokeLinecap="round"
    {...props}
  >
    <circle r="8" cx="12" cy="12" />
    <path d="M 18 18 l 8 8" />
  </Svg>
);
