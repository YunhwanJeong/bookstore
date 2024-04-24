import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Entry from './Entry';
import './global.css';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Entry />
  </React.StrictMode>,
);
