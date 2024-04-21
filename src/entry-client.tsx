import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.css';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
