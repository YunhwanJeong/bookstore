import { App } from '@/app';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  return { html };
}
