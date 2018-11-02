import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --hue: 200;
  }
  * {
    box-sizing: border-box;
    margin: 0;
  }
  html {
    font-size: 112.5%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: hsl(var(--hue), 10%, 10%);
    background-color: hsl(var(--hue), 45%, 65%);
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
