import App from '@/app/App';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
