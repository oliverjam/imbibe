import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: hsl(200, 10%, 25%);
    background-color: hsl(20, 10%, 97%);
  }
  ul {
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input {
    display: block;
    background: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: currentColor;
  }
`;

export default GlobalStyle;
