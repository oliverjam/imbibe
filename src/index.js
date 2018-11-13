import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HueProvider } from './HueProvider';

ReactDOM.render(
  <HueProvider>
    <App />
  </HueProvider>,
  document.getElementById('root')
);
