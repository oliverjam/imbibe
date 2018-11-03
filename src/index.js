import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HueProvider } from './HueProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HueProvider>
    <App />
  </HueProvider>
);
