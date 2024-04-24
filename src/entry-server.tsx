import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Entry from './Entry';

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Entry />
    </React.StrictMode>,
  );
  return { html };
}
